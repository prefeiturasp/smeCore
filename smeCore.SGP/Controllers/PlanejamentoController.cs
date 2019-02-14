using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using smeCore.Models.Academic;
using smeCore.SGP.Contexts;
using smeCore.SGP.Models.Planning;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace smeCore.SGP.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PlanejamentoController : ControllerBase
    {
        #region ==================== ATTRIBUTES ====================

        private readonly SMEContext _db; // Objeto context referente ao banco smeCoreDB

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== CONSTRUCTORS ====================

        /// <summary>
        /// Construtor padrão para o PlanejamentoController, faz injeção de dependências do SMEContext.
        /// </summary>
        /// <param name="db">Depêndencia de dataContext (SMEContext)</param>
        public PlanejamentoController(SMEContext db)
        {
            _db = db;
        }

        #endregion ==================== CONSTRUCTORS ====================

        #region ==================== METHODS ====================

        #region -------------------- PRIVATE --------------------

        private async Task<List<LearningObjective>> GetLearningObjectives()
        {
            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage getResponse = await client.GetAsync("http://curriculo.sme.prefeitura.sp.gov.br/api/v1/learning_objectives"))
            using (HttpContent content = getResponse.Content)
            {
                string response = await content.ReadAsStringAsync();
                List<LearningObjective> result = JsonConvert.DeserializeObject<List<LearningObjective>>(response);

                for (int i = 0; i < result.Count; i++)
                    result[i].CleanCode();

                return (result);
            }
        }

        #endregion -------------------- PRIVATE --------------------

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
            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage getResponse = await client.GetAsync("http://curriculo.sme.prefeitura.sp.gov.br/api/v1/knowledge_matrices"))
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
            // Inicialização do cliente para requisições (GET e POST)
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage getResponse = await client.GetAsync("http://curriculo.sme.prefeitura.sp.gov.br/api/ods"))
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

        [HttpGet]
        public async Task<ActionResult<string>> CarregarTurmasProfessor(string username)
        {
            //string connectionString = @"Server=10.49.16.23\SME_PRD;Database=GestaoPedagogica;User Id=Caique.Santos;Password=Antares2014;";
            //List<string> result = new List<string>();

            //using (SqlConnection con = new SqlConnection(connectionString))
            //{
            //    try
            //    {
            //        SqlCommand cmd = new SqlCommand("API_CoreSme_BuscaTurmasAtribuidasDocente", con);
            //        cmd.Parameters.Add(new SqlParameter("@usu_login", username));
            //        cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //        SqlDataReader reader;

            //        con.Open();
            //        reader = cmd.ExecuteReader();

            //        while (reader.Read())
            //        {
            //            string filtroTurma;
            //            string ano = Convert.ToDateTime(reader["Ano"]).ToString();
            //            ano = ano.Substring(6, 4);

            //            filtroTurma = ano + " - ";
            //            filtroTurma += reader["Turma"].ToString() + " - ";
            //            filtroTurma += reader["Nome"].ToString();

            //            if (result.Contains(filtroTurma) == false)
            //                result.Add(filtroTurma);
            //        }
            //    }
            //    catch (Exception ex)
            //    {
            //        throw;
            //    }
            //}

            #region ==================== Mock Data ====================

            Models.Mocking.Teacher result = new Models.Mocking.Teacher();
            result.id = username;
            result.schools.Add(new Models.Mocking.School() { name = "EMEF - MARIA APARECIDA DO NASCIMENTO, PROFA." });
            result.schools[0].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-1C",
                year = 1
            });
            result.schools[0].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-2A",
                year = 2
            });
            result.schools[0].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-3A",
                year = 3
            });

            result.schools.Add(new Models.Mocking.School() { name = "EMEF - IDEMIA DE GODOY, PROFA." });
            result.schools[1].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-4A",
                year = 4
            });
            result.schools[1].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-5B",
                year = 5
            });
            result.schools[1].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-6C",
                year = 6
            });

            result.schools.Add(new Models.Mocking.School() { name = "EMEF - MAURICIO GOULART" });
            result.schools[2].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-7A",
                year = 7
            });
            result.schools[2].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-8B",
                year = 8
            });
            result.schools[2].classes.Add(new Models.Mocking.MyClass()
            {
                description = "EF-9C",
                year = 9
            });

            #endregion ==================== Mock Data ====================

            if (result == null)
                return (NotFound());
            else
                return (Ok(result));
        }

        //[HttpPost]
        //public async Task<ActionResult<string>> SalvarPlanoCiclo(Cycle cycle)
        //{
        //    cycle.NewID();
        //    cycle.CreatedAt = DateTime.Now;
        //    cycle.ModifiedAt = DateTime.Now;

        //    Cycle old =
        //        (from current in _db.Cycles
        //         where current.Type == cycle.Type
        //         && current.School == cycle.School
        //         select current).FirstOrDefault();

        //    if (old != null)
        //    {
        //        old.ModifiedAt = cycle.ModifiedAt;
        //        old.ModifiedBy = cycle.ModifiedBy;
        //        old.Description = cycle.Description;
        //        old.SelectedKnowledgeMatrix = cycle.SelectedKnowledgeMatrix;
        //        old.SelectedODS = cycle.SelectedODS;

        //        await _db.SaveChangesAsync();
        //    }
        //    else
        //    {
        //        try
        //        {
        //            await _db.Cycles.AddAsync(cycle);
        //            await _db.SaveChangesAsync();
        //        }
        //        catch
        //        {
        //            return (BadRequest());
        //        }
        //    }

        //    return (Ok());
        //}

        //[HttpPost]
        //public async Task<ActionResult<string>> AbrirPlanoCiclo(Cycle cycle)
        //{
        //    Cycle result =
        //        (from current in _db.Cycles
        //         where current.Type == cycle.Type
        //         && current.School == cycle.School
        //         select current).SingleOrDefault();

        //    if (result != null)
        //        return (Ok(result));
        //    else
        //        return (NotFound());
        //}

        //[HttpPost]
        //public async Task<ActionResult<string>> SalvarPlanoAnual(AnnualPlanModel model)
        //{
        //    //AnnualPlan annualPlan = new AnnualPlan();
        //    //annualPlan.NewID();
        //    //annualPlan.CreatedAt = DateTime.Now;
        //    //annualPlan.ModifiedAt = DateTime.Now;

        //    Planning planning =
        //        (from current in _db.Plannings
        //         where current.UserId == model.Username
        //         && current.School == model.School
        //         && current.Year == model.Year
        //         && current.Classroom == model.Classroom
        //         select current).FirstOrDefault();

        //    if (planning != null)
        //    {
        //        planning.NewID();
        //        planning.CreatedAt = DateTime.Now;
        //        planning.ModifiedAt = DateTime.Now;
        //        planning.UserId = model.Username;
        //        planning.School = model.School;
        //        planning.Year = model.Year;




        //        old.ModifiedAt = annual.ModifiedAt;
        //        old.SelectedLearningObjectivesB1 = annual.SelectedLearningObjectivesB1;
        //        old.DescriptionB1 = annual.DescriptionB1;
        //        old.SelectedLearningObjectivesB2 = annual.SelectedLearningObjectivesB2;
        //        old.DescriptionB2 = annual.DescriptionB2;
        //        old.SelectedLearningObjectivesB3 = annual.SelectedLearningObjectivesB3;
        //        old.DescriptionB3 = annual.DescriptionB3;
        //        old.SelectedLearningObjectivesB4 = annual.SelectedLearningObjectivesB4;
        //        old.DescriptionB4 = annual.DescriptionB4;

        //        await _db.SaveChangesAsync();
        //    }
        //    else
        //    {
        //        try
        //        {
        //            await _db.Annuals.AddAsync(annual);
        //            await _db.SaveChangesAsync();
        //        }
        //        catch
        //        {
        //            return (BadRequest());
        //        }
        //    }

        //    return (Ok());
        //}

        //[HttpPost]
        //public async Task<ActionResult<string>> SalvarHorarioAula(Appointment appointment)
        //{
        //    appointment.NewID();
        //    appointment.CreatedAt = DateTime.Now;
        //    appointment.ModifiedAt = DateTime.Now;

        //    Appointment old =
        //        (from current in _db.Appointments
        //         where current.SchoolYear == appointment.SchoolYear
        //         && current.Classroom == appointment.Classroom
        //         && current.School == appointment.School
        //         && current.UserId == appointment.UserId
        //         && current.Date == appointment.Date
        //         select current).SingleOrDefault();

        //    if (old != null)
        //    {
        //        old.ModifiedAt = appointment.ModifiedAt;
        //        old.Date = appointment.Date;
        //        old.TagColor = appointment.TagColor;

        //        await _db.SaveChangesAsync();
        //    }
        //    else
        //    {
        //        try
        //        {
        //            await _db.Appointments.AddAsync(appointment);
        //            await _db.SaveChangesAsync();
        //        }
        //        catch
        //        {
        //            return (BadRequest());
        //        }
        //    }

        //    return (Ok());
        //}

        #endregion -------------------- PUBLIC --------------------

        #endregion ==================== METHODS ====================
    }
}