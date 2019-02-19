using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using smeCore.API.Service.Interface.AuthInterfaces;
using smeCore.Library.Extensions;
using smeCore.Models.Authentication;
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
    public class AuthController : Controller
    {
        #region ==================== ATTRIBUTES ====================

        private IConfiguration _config; // Objeto para recuperar informações de configuração do arquivo appsettings.json
        private readonly IAuthService authService;

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== CONSTRUCTORS ====================

        /// <summary>
        /// Construtor padrão para o AuthController, faz injeção de dependências de IConfiguration e SMEContext.
        /// </summary>
        /// <param name="config">Depêndencia de configurações</param>
        public AuthController(IConfiguration config, IAuthService authService)
        {
            _config = config;
            this.authService = authService;
        }

        #endregion ==================== CONSTRUCTORS ====================

        #region ==================== METHODS ====================

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
            ClientUser user = await authService.Authenticate(credential);
            
            (string newToken, string newRefreshToken) = await authService.GetTokens(user);

            if (newToken.IsNotNull() && newRefreshToken.IsNotNull())
            {
                return Ok(new { token = newToken, refreshToken = newRefreshToken });
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
            var logout = await authService.LogoutIdentity(credential);
            
            if (logout)
            {
                return Ok();
            }

            return Unauthorized();
        }


        #endregion -------------------- PUBLIC --------------------

        #endregion ==================== METHODS ====================
    }
}