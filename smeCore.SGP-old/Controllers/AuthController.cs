using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using smeCore.Models.Authentication;
using smeCore.Models.Settings;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.SGP.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        #region ==================== ATTRIBUTES ====================

        private readonly SgpURLSettings _sgpURLSettings; // Objeto referente às URLS no appsettings

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== CONSTRUCTORS ====================

        public AuthController(IOptions<SgpURLSettings> sgpURLSettings)
        {
            _sgpURLSettings = sgpURLSettings.Value;
        }

        #endregion ==================== CONSTRUCTORS ====================

        #region ==================== METHODS ====================

        #region -------------------- PUBLIC --------------------

        [HttpPost]
        public async Task<ActionResult<string>> Login([FromBody]Credential credential)
        {
            // Configurações iniciais
            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add("credential", JsonConvert.SerializeObject(credential));
            string result = "";

            //return (Ok(credential));

            // Inicialização do cliente para requisições (GET e POST)
            HttpClient client = new HttpClient();
            var response = await client.PostAsync(_sgpURLSettings.LoginURL, 
                                                new StringContent(JsonConvert.SerializeObject(credential), 
                                                Encoding.UTF8, "application/json"));

            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadAsStringAsync();

                return (Ok(result));
            }

            return (Unauthorized());
        }

        #endregion -------------------- PUBLIC --------------------

        #endregion ==================== METHODS ====================
    }
}