using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using smeCore.API.Repository.Interface.APIContexts;
using smeCore.API.Repository.Interface.Interfaces;
using smeCore.API.Service.Interface.AuthInterfaces;
using smeCore.API.Service.Interface.Settings;
using smeCore.Library.Extensions;
using smeCore.Models.Authentication;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.API.Service.Autenticacao
{
    public class AuthService : IAuthService
    {
        private readonly SMEAPIContext _db;
        private readonly IAuthRepository<LoggedUser> loggedUserRepository;
        private IConfiguration _config;
        private readonly ApiURLSettings apiURLSettings;
        private readonly APISettings apiSettings;
        private const string PARAM_VERIFICATION_TOKEN = "__RequestVerificationToken";

        public AuthService(IConfiguration config,
                           SMEAPIContext db, 
                           IOptions<ApiURLSettings> apiURLSettings, 
                           IOptions<APISettings> apiSettings,
                           IAuthRepository<LoggedUser> loggedUserRepository)
        {
            _config = config;
            _db = db;
            this.apiURLSettings = apiURLSettings.Value;
            this.apiSettings = apiSettings.Value;
            this.loggedUserRepository = loggedUserRepository;
        }

        /// <summary>
        /// Método para validar as credenciais de login do usuário.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário</param>
        /// <returns>Objeto contendo informações do usuário encontrado, caso não seja encontrado nenhum usuário com correspondente a credencial enviada o método retorna nulo.</returns>
        public async Task<ClientUser> Authenticate(Credential credential)
        {
            CookieContainer cookies = new CookieContainer();
            HttpClientHandler handler = new HttpClientHandler();
            handler.CookieContainer = cookies;

            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient(handler))
            using (HttpResponseMessage getResponse = await client.GetAsync(apiURLSettings.AuthenticateURL))
            using (HttpContent content = getResponse.Content)
            {
                // Extrai o anti forgery token da pagina da requisição GET
                string result = await content.ReadAsStringAsync();
                string forgeryToken = result.ExtractDataByName(PARAM_VERIFICATION_TOKEN);

                // Faz o POST dos dados (login) caso o usuário não esteja logado
                if (forgeryToken.IsNotNull())
                {
                    HttpRequestMessage request = CreateRequestBody(credential, apiURLSettings.AuthenticateURL, forgeryToken);

                    HttpResponseMessage postResponse = await client.SendAsync(request); // Executa a requisição

                    // Caso a requisição não ocorra corretamente, retorna 'null'
                    if (!postResponse.IsSuccessStatusCode)
                        return null;

                    result = await postResponse.Content.ReadAsStringAsync();

                    // Caso o usuário não seja autenticado, retorna 'null'
                    if (!result.StartsWith(apiSettings.AuthSettings.AuthenticateResponseStart))
                        return null;
                }

               return CreateUser(credential, apiURLSettings.AuthenticateURL, cookies, result);
            }
        }

        private static HttpRequestMessage CreateRequestBody(Credential credential, string url, string forgeryToken)
        {
            // Cria os dados necessários que compõe o corpo da requisição
            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add(PARAM_VERIFICATION_TOKEN, forgeryToken); // Adiciona o Anti Forgery Token
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

        public async Task<(string newtoken, string newRefreshToken)> RefreshToken(Credential credential)
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

                    await loggedUserRepository.SaveAsync(); // Salva as informações na tabela correspondente (LoggedUsers)

                    return (newToken, newRefreshToken);
                }
                else
                {
                    // Caso não seja válido, remove o usuário da lista de usuários logados                
                    await loggedUserRepository.DeleteAsync(loggedUser);
                }
            }

            return (string.Empty, string.Empty);
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

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        /// <summary>
        /// Método para gerar um refresh token para revalidar acesso do usuário sem a necessidade de um novo login.
        /// </summary>
        /// <returns>Refresh token para revalidação do usuário</returns>
        private string CreateRefreshToken()
        {
            byte[] randomNumber = new byte[32];

            using (var randomNumGenerated = RandomNumberGenerator.Create())
            {
                randomNumGenerated.GetBytes(randomNumber);
                string refreshToken = Convert.ToBase64String(randomNumber);

                // Descomentar a linha abaixo para retirar do token os caracteres indesejados
                //refreshToken = CleanString(refreshToken, new string[] { "+", "=", "/" });

                return refreshToken;
            }
        }

        public async Task<(string newtoken, string newRefreshToken)> GetTokens(ClientUser user)
        {
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

                    await loggedUserRepository.AddAsync(loggedUser);
                }
                else // Caso contrário, atualiza as informações
                {
                    loggedUser.RefreshToken = newRefreshToken;
                    loggedUser.LastLogin = DateTime.Now;
                    loggedUser.ExpiresAt = DateTime.Now.AddMinutes(30);

                    await loggedUserRepository.SaveAsync();
                }

                return (newToken, newRefreshToken);
            }

            return (string.Empty, string.Empty);
        }

        public async Task<bool> LogoutIdentity(Credential credential)
        {
            // Cria os dados necessários que compõe o corpo da requisição
            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add("logoutId", credential.Username); // Adiciona o nome de usuário

            // Inicialização do cliente para requisições (GET)
            using (HttpRequestMessage request =
                new HttpRequestMessage(HttpMethod.Get,
                                        apiURLSettings.LogoutIdentityURL
                                        )
                {
                    Content = new FormUrlEncodedContent(data)
                }
                ) // Encoda os dados no formato correto dentro da requisição

            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage response = await client.SendAsync(request))
            {
                return response.IsSuccessStatusCode;
            }
        }
    }
}
