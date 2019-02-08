using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using smeCore.Models.Authentication;
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
        #region ==================== METHODS ====================

        #region -------------------- PUBLIC --------------------

        [HttpPost]
        public async Task<ActionResult<string>> Login([FromBody]Credential credential)
        {
            // Configurações iniciais
            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add("credential", JsonConvert.SerializeObject(credential));
            string result = "";

            // Inicialização do cliente para requisições (GET e POST)
            HttpClient client = new HttpClient();
            var response = await client.PostAsync("http://smecore.sme.prefeitura.sp.gov.br/api/Auth/LoginJWT",
                new StringContent(JsonConvert.SerializeObject(credential),
                Encoding.UTF8, "application/json"));

            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadAsStringAsync();

                return (Ok(result));
            }

            return (Unauthorized());
        }

        [HttpPost]
        public async Task<ActionResult<string>> RefreshLogin([FromBody]Credential credential)
        {
            // Configurações iniciais
            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add("credential", JsonConvert.SerializeObject(credential));
            string result = "";

            // Inicialização do cliente para requisições (GET e POST)
            HttpClient client = new HttpClient();
            var response = await client.PostAsync("http://smecore.sme.prefeitura.sp.gov.br/api/Auth/RefreshLoginJWT",
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