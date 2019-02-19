using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using smeCore.API.Contexts;
using smeCore.Models.Authentication;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.API.Controllers.Authentication
{
    /// <summary>
    /// Controller da API responsável pela autenticação do usuário.
    /// </summary>
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        #region ==================== ATTRIBUTES ====================

        private IConfiguration _config; // Objeto para recuperar informações de configuração do arquivo appsettings.json
        private readonly SMEContext _db; // Objeto context referente ao banco smeCoreDB

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== CONSTRUCTORS ====================

        /// <summary>
        /// Construtor padrão para o AuthController, faz injeção de dependências de IConfiguration e SMEContext.
        /// </summary>
        /// <param name="config">Depêndencia de configurações</param>
        /// <param name="db">Depêndencia de dataContext (SMEContext)</param>
        public AuthController(IConfiguration config, SMEContext db)
        {
            _config = config;
            _db = db;
        }

        #endregion ==================== CONSTRUCTORS ====================

        #region ==================== METHODS ====================

        #region -------------------- PRIVATE --------------------

        /// <summary>
        /// Método para validar as credenciais de login do usuário.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário</param>
        /// <returns>Objeto contendo informações do usuário encontrado, caso não seja encontrado nenhum usuário com correspondente a credencial enviada o método retorna nulo.</returns>
        private async Task<ClientUser> Authenticate(Credential credential)
        {
            // Configurações iniciais
            string url = "http://identity.sme.prefeitura.sp.gov.br/Account/Login";
            CookieContainer cookies = new CookieContainer();
            HttpClientHandler handler = new HttpClientHandler();
            handler.CookieContainer = cookies;

            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient(handler))
            using (HttpResponseMessage getResponse = await client.GetAsync(url))
            using (HttpContent content = getResponse.Content)
            {
                // Extrai o anti forgery token da pagina da requisição GET
                string result = await content.ReadAsStringAsync();
                string forgeryToken = ExtractDataByName(result, "__RequestVerificationToken");

                // Faz o POST dos dados (login) caso o usuário não esteja logado
                if (forgeryToken != string.Empty)
                {
                    // Cria os dados necessários que compõe o corpo da requisição
                    Dictionary<string, string> data = new Dictionary<string, string>();
                    data.Add("__RequestVerificationToken", forgeryToken); // Adiciona o Anti Forgery Token
                    data.Add("Username", credential.Username); // Adiciona o nome de usuário
                    data.Add("Password", credential.Password); // Adiciona a senha
                    HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, url) { Content = new FormUrlEncodedContent(data) }; // Encoda os dados no formato correto dentro da requisição
                    HttpResponseMessage postResponse = await client.SendAsync(request); // Executa a requisição

                    // Caso a requisição não ocorra corretamente, retorna 'null'
                    if (!postResponse.IsSuccessStatusCode)
                        return (null);

                    result = await postResponse.Content.ReadAsStringAsync();

                    // Caso o usuário não seja autenticado, retorna 'null'
                    if (result.StartsWith("<form method='post' action='http://coresso.sme.prefeitura.sp.gov.br/Login.ashx'>") == false)
                        return (null);
                }

                // Cria e pega informações do usuário
                ClientUser user = await GetUser(credential.Username);

                if (user == null)
                    user = new ClientUser() { Username = credential.Username };

                // Pega os cookies da pagina
                user.Cookies = cookies.GetCookies(new Uri(url)).Cast<Cookie>();

                // Preenche as informações do identity
                user.Identity = new Identity();
                user.Identity.code = ExtractDataByName(result, "code");
                user.Identity.id_token = ExtractDataByName(result, "id_token");
                user.Identity.access_token = ExtractDataByName(result, "access_token");
                user.Identity.token_type = ExtractDataByName(result, "token_type");
                user.Identity.expires_in = ExtractDataByName(result, "expires_in");
                user.Identity.scope = ExtractDataByName(result, "scope");
                user.Identity.state = ExtractDataByName(result, "state");
                user.Identity.sesion_state = ExtractDataByName(result, "session_state");

                return (user);
            }
        }

        /// <summary>
        /// Método para gerar o token de acesso.
        /// </summary>
        /// <param name="user">Objeto contendo informações do usuário</param>
        /// <returns>Token gerado à partir das informações do usuário.</returns>
        private string CreateToken(ClientUser user)
        {
            // Adicionar Claims para restringir o acesso dos usuários a determinados conteudos
            Claim[] claims = new Claim[]
            {
                //new Claim(JwtRegisteredClaimNames.Sub, user.Name),
                new Claim("username", user.Username),
                //new Claim(JwtRegisteredClaimNames.Email, user.email),
                //new Claim(JwtRegisteredClaimNames.Birthdate, user.birthdate.ToString("yyyy-MM-dd")),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtSettings:Key"]));
            SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            JwtSecurityToken token = new JwtSecurityToken(
                _config["JwtSettings:Issuer"],
                _config["JwtSettings:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(10), // Define o tempo de validade de cada token
                signingCredentials: creds);

            return (new JwtSecurityTokenHandler().WriteToken(token));
        }

        /// <summary>
        /// Método para gerar um refresh token para revalidar acesso do usuário sem a necessidade de um novo login.
        /// </summary>
        /// <returns>Refresh token para revalidação do usuário</returns>
        private string CreateRefreshToken()
        {
            byte[] randomNumber = new byte[32];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                string refreshToken = Convert.ToBase64String(randomNumber);

                // Descomentar a linha abaixo para retirar do token os caracteres indesejados
                //refreshToken = CleanString(refreshToken, new string[] { "+", "=", "/" });

                return (refreshToken);
            }
        }

        /// <summary>
        /// Método para limpar a string removendo caracteres indesejados
        /// </summary>
        /// <param name="originalString">String original a ser retirado os caracteres</param>
        /// <param name="parameters">Vetor de caracteres a serem removidas</param>
        /// <returns>String sem os caracteres contidos no vetor 'parameters'</returns>
        private string CleanString(string originalString, string[] parameters)
        {
            foreach (string character in parameters)
                originalString = originalString.Replace(character, string.Empty);

            return (originalString);
        }

        /// <summary>
        /// Método para encontrar um usuário pelo username. Não está implementado corretamente ainda.
        /// </summary>
        /// <param name="username">Nome de usuário a ser retornado</param>
        /// <returns>Usuário com o username especificado.</returns>
        private async Task<ClientUser> GetUser(string username)
        {
            string connectionString = @"Server=10.49.16.23\SME_PRD;Database=GestaoPedagogica;User Id=Caique.Santos;Password=Antares2014;";
            ClientUser clientUser = null;

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand("API_SMECORE_GET_USER_INFO", con);
                    cmd.Parameters.Add(new SqlParameter("@usu_login", username));
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlDataReader reader;

                    con.Open();
                    reader = cmd.ExecuteReader();
                    reader.Read();

                    clientUser = new ClientUser() { Username = username };
                    clientUser.Name = reader["nome"].ToString();
                    clientUser.Email = reader["email"].ToString();
                }
                catch (Exception ex)
                {
                    return (null);
                }
            }

            return (clientUser);
        }

        /// <summary>
        /// Método para extrair atributos de uma página html (raw) pela propriedade 'name'. Só funciona se a propriedade 'name' estiver antes do 'value'.
        /// </summary>
        /// <param name="source">Fonte do html (raw)</param>
        /// <param name="name">Nome do atributo desejado</param>
        /// <returns>Valor (value) do atributo desejado</returns>
        private static string ExtractDataByName(string source, string name)
        {
            int startIndex = source.IndexOf(string.Format("name=\"{0}\"", name));
            string delimiter = "\"";

            if (startIndex < 0)
            {
                startIndex = source.IndexOf(string.Format("name='{0}'", name));
                delimiter = "'";

                if (startIndex < 0)
                    return (string.Empty);
            }

            int firstIndex = source.IndexOf("value=" + delimiter, startIndex) + 7;
            int lastIndex = source.IndexOf(">", startIndex);
            string data = source.Substring(firstIndex, lastIndex - firstIndex - 3);

            return (data);
        }

        #endregion -------------------- PRIVATE --------------------

        #region -------------------- PUBLIC --------------------

        /// <summary>
        /// Método para efetuar o login do usuário utilizando o sistema http://identity.sme.prefeitura.sp.gov.br para validar o usuário e receber um token JWT.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username e password</param>
        /// <returns>Token e RefreshToken gerado à partir das informações do usuário encontrado, caso não seja encontrado nenhum usuário correspondente à credencial, o método retorna usuário não autorizado.</returns>
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<string>> LoginJWT([FromBody]Credential credential)
        {
            ClientUser user = await Authenticate(credential); // Faz a autenticação do usuário

            // Caso seja encontrado algum usuário com a combinação username e password
            if (user != null)
            {
                string newToken = CreateToken(user); // Cria o token de acesso
                string newRefreshToken = CreateRefreshToken(); // Cria o refresh token

                // Verifica se o usuário existe dentro dos usuários logados
                LoggedUser loggedUser =
                    (from current in _db.LoggedUsers
                     where current.Username == user.Username
                     select current).FirstOrDefault();

                if (loggedUser == null) // Se o usuário não existir, registrar login
                {
                    loggedUser = new LoggedUser()
                    {
                        Username = user.Username,
                        RefreshToken = newRefreshToken,
                        LastLogin = DateTime.Now,
                        ExpiresAt = DateTime.Now.AddMinutes(30)
                    };

                    await _db.LoggedUsers.AddAsync(loggedUser);
                }
                else // Caso contrário, atualiza as informações
                {
                    loggedUser.RefreshToken = newRefreshToken;
                    loggedUser.LastLogin = DateTime.Now;
                    loggedUser.ExpiresAt = DateTime.Now.AddMinutes(30);
                }

                await _db.SaveChangesAsync(); // Salva as informações na tabela correspondente (LoggedUsers)

                return (Ok(new SgpToken { Token = newToken, RefreshToken = newRefreshToken }));
            }

            return (Unauthorized());
        }

        /// <summary>
        /// Método para renovar o token através do refresh token e nome de usuário.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username e refreshToken</param>
        /// <returns>Token e RefreshToken gerado à partir do RefreshToken utilizado, caso o RefreshToken não seja válido, o método retorna usuário não autorizado.</returns>
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<string>> RefreshLoginJWT([FromBody]Credential credential)
        {
            // Faz a pesquisa no banco de dados (smeCoreDB/LoggedUsers) se o usuário está listado como logado e possui o mesmo refresh token
            LoggedUser loggedUser =
                (from current in _db.LoggedUsers
                 where current.Username == credential.Username
                 && current.RefreshToken == credential.RefreshToken
                 select current).FirstOrDefault();

            // Caso seja encontrado algum usuário com a combinação username e refreshToken, verifica se o refresh token ainda é valido
            if (loggedUser != null)
                if ((loggedUser.ExpiresAt - DateTime.Now).Minutes > 0)
                {
                    ClientUser user = new ClientUser() { Username = credential.Username };//await GetUser(credential.Username); // Busca o usuário pelo username
                    string newToken = CreateToken(user); // Cria o token de acesso
                    string newRefreshToken = CreateRefreshToken(); // Cria o refresh token

                    loggedUser.RefreshToken = newRefreshToken;
                    loggedUser.LastLogin = DateTime.Now;
                    loggedUser.ExpiresAt = DateTime.Now.AddMinutes(30); // Define o tempo de validade do refresh token

                    await _db.SaveChangesAsync(); // Salva as informações na tabela correspondente (LoggedUsers)

                    return (Ok(new { token = newToken, refreshToken = newRefreshToken }));
                }
                else // Caso não seja válido, remove o usuário da lista de usuários logados
                {
                    _db.Remove(loggedUser); // Remove o usuário
                    await _db.SaveChangesAsync(); // Salva as informações na tabela correspondente (LoggedUsers)
                }

            return (Unauthorized());
        }

        /// <summary>
        /// Método para fazer login do usuário utilizando o sistema http://identity.sme.prefeitura.sp.gov.br.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username e password</param>
        /// <returns>Informações sobre o usuário que está tentando logar (tokens de acesso e cookies), caso não seja encontrado nenhum usuário correspondente à credencial, o método retorna usuário não autorizado.</returns>
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<string>> LoginIdentity([FromBody]Credential credential)
        {
            // Executa o método de autenticação
            ClientUser user = await Authenticate(credential);
            user.SgpToken = new SgpToken();
            user.SgpToken.Token = CreateToken(user); // Cria o token de acesso
            user.SgpToken.RefreshToken = CreateRefreshToken(); // Cria o refresh token

            if (user == null)
                return (Unauthorized());
            else
                return (Ok(user));
        }

        /// <summary>
        /// Método para fazer o logout utilizando o sistema http://identity.sme.prefeitura.sp.gov.br.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username</param>
        /// <returns>Sucesso (status code 200) caso seja possível deslogar o usuário desejado.</returns>
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<string>> LogoutIdentity([FromBody] Credential credential)
        {
            // Configurações iniciais
            string url = "http://identity.sme.prefeitura.sp.gov.br/Account/Logout";

            // Cria os dados necessários que compõe o corpo da requisição
            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add("logoutId", credential.Username); // Adiciona o nome de usuário

            // Inicialização do cliente para requisições (GET)
            using (HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, url) { Content = new FormUrlEncodedContent(data) }) // Encoda os dados no formato correto dentro da requisição
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage response = await client.SendAsync(request))
            {
                // Caso a requisição não ocorra corretamente, retorna 'Unauthorized'
                if (!response.IsSuccessStatusCode)
                    return (Unauthorized());
                else
                    return (Ok());
            }
        }

        #endregion -------------------- PUBLIC --------------------

        #endregion ==================== METHODS ====================
    }
}