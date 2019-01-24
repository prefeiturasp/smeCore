using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using smeCore.SGP.Contexts;
using smeCore.SGP.Models.Planning;

namespace smeCore.SGP.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PlanejamentoController : ControllerBase
    {
        #region ==================== ATTRIBUTES ====================
        private readonly SMEContext _db; // Objeto context referente ao banco smeCoreDB
        #endregion



        #region ==================== CONSTRUCTORS ====================
        /// <summary>
        /// Construtor padrão para o PlanejamentoController, faz injeção de dependências do SMEContext.
        /// </summary>
        /// <param name="db">Depêndencia de dataContext (SMEContext)</param>
        public PlanejamentoController(SMEContext db)
        {
            _db = db;
        }
        #endregion



        #region ==================== METHODS ====================
        #region -------------------- PRIVATE --------------------
        private async Task<List<LearningObjective>> GetLearningObjectives()
        {
            // Configurações iniciais
            string url = "http://curriculo.sme.prefeitura.sp.gov.br/api/v1/learning_objectives";

            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage getResponse = await client.GetAsync(url))
            using (HttpContent content = getResponse.Content)
            {
                string response = await content.ReadAsStringAsync();
                List<LearningObjective> result = JsonConvert.DeserializeObject<List<LearningObjective>>(response);

                for (int i = 0; i < result.Count; i++)
                    result[i].CleanCode();

                return (result);
            }
        }
        #endregion

        #region -------------------- PUBLIC --------------------
        /// <summary>
        /// Método para listar os objetivos de aprendizagem, podendo ser filtrado pelo ano desejado.
        /// </summary>
        /// <param name="ano">Valor opcional para filtrar os resultados</param>
        /// <returns>Retorna a coleção de objetivos de aprendizagem em formato JSON</returns>
        [HttpGet]
        public async Task<ActionResult<string>> ListarObjetivosAprendizagem(string ano = null)
        {
            if (ano == null)
                return (JsonConvert.SerializeObject(await GetLearningObjectives()));
            else
            {
                switch (ano)
                {
                    default:
                    case "1":
                        ano = "first";
                        break;
                    case "2":
                        ano = "second";
                        break;
                    case "3":
                        ano = "third";
                        break;
                    case "4":
                        ano = "fourth";
                        break;
                    case "5":
                        ano = "fifth";
                        break;
                    case "6":
                        ano = "sixth";
                        break;
                    case "7":
                        ano = "seventh";
                        break;
                    case "8":
                        ano = "eighth";
                        break;
                    case "9":
                        ano = "nineth";
                        break;
                }

                List<LearningObjective> result =
                    (from learningObjective in await GetLearningObjectives()
                     where learningObjective.year == ano
                     orderby learningObjective.code
                     select learningObjective).ToList();

                return (Ok(result));
            }
        }

        /// <summary>
        /// Método para listar os itens da matriz dos saberes.
        /// </summary>
        /// <returns>Retorna todos os elementos da matriz dos saberes em formato JSON.</returns>
        [HttpGet]
        public async Task<ActionResult<string>> ListarMatrizSaberes()
        {
            // Configurações iniciais
            string url = "http://curriculo.sme.prefeitura.sp.gov.br/api/v1/knowledge_matrices";

            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage getResponse = await client.GetAsync(url))
            using (HttpContent content = getResponse.Content)
            {
                string response = await content.ReadAsStringAsync();
                List<KnowledgeItem> result = 
                    (from knowledgeItem in JsonConvert.DeserializeObject<List<KnowledgeItem>>(response)
                     orderby knowledgeItem.sequence
                     select knowledgeItem).ToList();

                return (Ok(result));
            }
        }

        /// <summary>
        /// Método para listar os Objetivos de Desenvolvimento Sustentável (ODS).
        /// </summary>
        /// <returns>Retorna todos os elementos dos objetivos de desenvolvimento sustentavel (ODS) em formato JSON.</returns>
        [HttpGet]
        public async Task<ActionResult<string>> ListarODS()
        {
            // Configurações iniciais
            string url = "http://curriculo.sme.prefeitura.sp.gov.br/api/ods";

            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage getResponse = await client.GetAsync(url))
            using (HttpContent content = getResponse.Content)
            {
                string response = await content.ReadAsStringAsync();
                List<SustainableDevItem> result = 
                    (from sustainableDevItem in JsonConvert.DeserializeObject<List<SustainableDevItem>>(response)
                     orderby sustainableDevItem.sequence
                     select sustainableDevItem).ToList();

                return (Ok(result));
            }
        }
        #endregion
        #endregion
    }
}