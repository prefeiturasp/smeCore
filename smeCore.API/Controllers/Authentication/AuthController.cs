using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using smeCore.API.Contexts;
using smeCore.API.Service.Interface.AuthInterfaces;
using smeCore.Library.Extensions;
using smeCore.Models.Authentication;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
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
    [Route("api/Autenticacao")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        #region ==================== ATTRIBUTES ====================

        private IConfiguration _config; // Objeto para recuperar informações de configuração do arquivo appsettings.json
        private readonly SMEContext _db; // Objeto context referente ao banco smeCoreDB
        private readonly IAuthService authService;

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== CONSTRUCTORS ====================

        /// <summary>
        /// Construtor padrão para o AuthController, faz injeção de dependências de IConfiguration e SMEContext.
        /// </summary>
        /// <param name="config">Depêndencia de configurações</param>
        /// <param name="db">Depêndencia de dataContext (SMEContext)</param>
        public AuthController(IConfiguration config, SMEContext db, IAuthService authService)
        {
            _config = config;
            _db = db;
            this.authService = authService;
        }

        #endregion ==================== CONSTRUCTORS ====================

        #region ==================== METHODS ====================

        #region -------------------- PRIVATE --------------------
        /// <summary>
        /// Método para encontrar um usuário pelo username. Não está implementado corretamente ainda.
        /// </summary>
        /// <param name="username">Nome de usuário a ser retornado</param>
        /// <returns>Usuário com o username especificado.</returns>
        private async Task<ClientUser> GetUser(string username)
        {
            // Corrigir a metodologia de encontrar o usuário
            if (username == "teste")
            {
                return (new ClientUser() { Name = "Usuário Teste", Email = "teste@teste.teste", Username = "teste" });
            }

            return (null);
        }        

        #endregion -------------------- PRIVATE --------------------

        #region -------------------- PUBLIC --------------------

        /// <summary>
        /// Método para efetuar o login do usuário utilizando o sistema http://identity.sme.prefeitura.sp.gov.br para validar o usuário e receber um token JWT.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username e password</param>
        /// <returns>Token e RefreshToken gerado à partir das informações do usuário encontrado, caso não seja encontrado nenhum usuário correspondente à credencial, o método retorna usuário não autorizado.</returns>
        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<string>> LoginJWT([FromBody]Credential credential)
        {
            ClientUser user = await authService.Authenticate(credential); // Faz a autenticação do usuário

            // Caso seja encontrado algum usuário com a combinação username e password
            if (user != null)
            {
                string newToken = authService.CreateToken(user); // Cria o token de acesso
                string newRefreshToken = authService.CreateRefreshToken(); // Cria o refresh token

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

                return (Ok(new { token = newToken, refreshToken = newRefreshToken }));
            }

            return Unauthorized();
        }

        /// <summary>
        /// Método para renovar o token através do refresh token e nome de usuário.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username e refreshToken</param>
        /// <returns>Token e RefreshToken gerado à partir do RefreshToken utilizado, caso o RefreshToken não seja válido, o método retorna usuário não autorizado.</returns>
        [AllowAnonymous]
        [HttpPost("RefreshToken")]
        public async Task<ActionResult<string>> RefreshLoginJWT([FromBody]Credential credential)
        {
            (string newToken, string newRefreshToken) = await authService.RefreshToken(credential);

            if (newToken.IsNotNull() && newRefreshToken.IsNotNull())
            {
                return Ok(new { token = newToken, refreshToken = newRefreshToken });
            }            

            return Unauthorized();
        }

        /// <summary>
        /// Método para fazer login do usuário utilizando o sistema http://identity.sme.prefeitura.sp.gov.br.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username e password</param>
        /// <returns>Informações sobre o usuário que está tentando logar (tokens de acesso e cookies), caso não seja encontrado nenhum usuário correspondente à credencial, o método retorna usuário não autorizado.</returns>
        [AllowAnonymous]
        [HttpPost("Login/Identity")]
        public async Task<ActionResult<string>> LoginIdentity([FromBody]Credential credential)
        {
            // Executa o método de autenticação
            ClientUser user = await authService.Authenticate(credential);

            if (user == null)
                return Unauthorized();
            else
                return Ok(user);
        }

        /// <summary>
        /// Método para fazer o logout utilizando o sistema http://identity.sme.prefeitura.sp.gov.br.
        /// </summary>
        /// <param name="credential">Objeto que contém informações da credencial do usuário, neste caso específico é necessário o atributo username</param>
        /// <returns>Sucesso (status code 200) caso seja possível deslogar o usuário desejado.</returns>
        [AllowAnonymous]
        [HttpPost("Logout/Identity")]
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
                    return Unauthorized();
                else
                    return Ok();
            }
        }

        #endregion -------------------- PUBLIC --------------------

        #endregion ==================== METHODS ====================
    }
}