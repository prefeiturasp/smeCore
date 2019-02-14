using System.Threading.Tasks;
using smeCore.API.Service.Interface.AuthInterfaces;
using smeCore.Models.Authentication;
using System;
using System.Net;
using System.Net.Http;
using System.Collections.Generic;
using smeCore.Library.Extensions;
using System.Linq;
using smeCore.SGP.Contexts;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography;

namespace smeCore.API.Service.Autenticacao
{
    public class AuthService : IAuthService
    {
        private readonly SMEContext _db;
        private IConfiguration _config;

        public AuthService(IConfiguration config, SMEContext db)
        {
            _config = config;
            _db = db;
        }

        /// <summary>
        /// Método para validar as credenciais de login do usuário.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário</param>
        /// <returns>Objeto contendo informações do usuário encontrado, caso não seja encontrado nenhum usuário com correspondente a credencial enviada o método retorna nulo.</returns>
        public async Task<ClientUser> Authenticate(Credential credential)
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
                string forgeryToken = result.ExtractDataByName("__RequestVerificationToken");

                // Faz o POST dos dados (login) caso o usuário não esteja logado
                if (forgeryToken != string.Empty)
                {
                    HttpRequestMessage request = CreateRequestBody(credential, url, forgeryToken);

                    HttpResponseMessage postResponse = await client.SendAsync(request); // Executa a requisição

                    // Caso a requisição não ocorra corretamente, retorna 'null'
                    if (!postResponse.IsSuccessStatusCode)
                        return null;

                    result = await postResponse.Content.ReadAsStringAsync();

                    // Caso o usuário não seja autenticado, retorna 'null'
                    if (result.StartsWith("<form method='post' action='http://coresso.sme.prefeitura.sp.gov.br/Login.ashx'>") == false)
                        return null;
                }

                ClientUser user = CreateUser(credential, url, cookies, result);

                return user;
            }
        }

        private static HttpRequestMessage CreateRequestBody(Credential credential, string url, string forgeryToken)
        {
            // Cria os dados necessários que compõe o corpo da requisição
            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add("__RequestVerificationToken", forgeryToken); // Adiciona o Anti Forgery Token
            data.Add("Username", credential.Username); // Adiciona o nome de usuário
            data.Add("Password", credential.Password); // Adiciona a senha
            return new HttpRequestMessage(HttpMethod.Post, url) { Content = new FormUrlEncodedContent(data) }; // Encoda os dados no formato correto dentro da requisição            
        }

        private static ClientUser CreateUser(Credential credential, string url, CookieContainer cookies, string result)
        {
            // Cria o usuário
            ClientUser user = new ClientUser() { Username = credential.Username };

            // Pega os cookies da pagina
            user.Cookies = cookies.GetCookies(new Uri(url)).Cast<Cookie>();

            // Preenche as informações do identity
            user.Identity = new Identity();
            user.Identity.code = result.ExtractDataByName("code");
            user.Identity.id_token = result.ExtractDataByName("id_token");
            user.Identity.access_token = result.ExtractDataByName("access_token");
            user.Identity.token_type = result.ExtractDataByName("token_type");
            user.Identity.expires_in = result.ExtractDataByName("expires_in");
            user.Identity.scope = result.ExtractDataByName("scope");
            user.Identity.state = result.ExtractDataByName("state");
            user.Identity.sesion_state = result.ExtractDataByName("session_state");
            return user;
        }

        public async Task<(string, string)> RefreshToken(Credential credential)
        {
            // Faz a pesquisa no banco de dados (smeCoreDB/LoggedUsers) se o usuário está listado como logado e possui o mesmo refresh token
            LoggedUser loggedUser =
                (from current in _db.LoggedUsers
                 where current.Username == credential.Username
                 && current.RefreshToken == credential.RefreshToken
                 select current).FirstOrDefault();

            // Caso seja encontrado algum usuário com a combinação username e refreshToken, verifica se o refresh token ainda é valido
            if (loggedUser != null)
            {
                if ((loggedUser.ExpiresAt - DateTime.Now).Minutes > 0)
                {
                    ClientUser user = new ClientUser() { Username = credential.Username };//await GetUser(credential.Username); // Busca o usuário pelo username
                    string newToken = CreateToken(user); // Cria o token de acesso
                    string newRefreshToken = CreateRefreshToken(); // Cria o refresh token

                    loggedUser.RefreshToken = newRefreshToken;
                    loggedUser.LastLogin = DateTime.Now;
                    loggedUser.ExpiresAt = DateTime.Now.AddMinutes(30); // Define o tempo de validade do refresh token

                    await _db.SaveChangesAsync(); // Salva as informações na tabela correspondente (LoggedUsers)

                    return (newToken, newRefreshToken);
                }
                else // Caso não seja válido, remove o usuário da lista de usuários logados
                {
                    _db.Remove(loggedUser); // Remove o usuário
                    await _db.SaveChangesAsync(); // Salva as informações na tabela correspondente (LoggedUsers)
                }
            }

            return (string.Empty, string.Empty);
        }

        /// <summary>
        /// Método para gerar o token de acesso.
        /// </summary>
        /// <param name="user">Objeto contendo informações do usuário</param>
        /// <returns>Token gerado à partir das informações do usuário.</returns>
        public string CreateToken(ClientUser user)
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
        public string CreateRefreshToken()
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
    }
}
