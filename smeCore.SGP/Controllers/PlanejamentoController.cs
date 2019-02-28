﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using smeCore.Models.Academic;
using smeCore.Models.Entity;
using smeCore.Models.Organization;
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

        private CalendarModel CreateCalendar()
        {
            CalendarModel calendar = new CalendarModel() { Weeks = new List<List<DayScheduleModel>>() };

            DateTime today = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
            DateTime sunday = today.AddDays(-(int)today.DayOfWeek);

            for (int i = 0; i < 5; i++)
                calendar.Weeks.Add(CreateWeekDays(sunday.AddDays(i * 7)));

            return (calendar);
        }

        private List<DayScheduleModel> CreateWeekDays(DateTime sunday)
        {
            List<DayScheduleModel> week = new List<DayScheduleModel>();

            for (int i = 0; i < 7; i++)
            {
                DateTime today = sunday.AddDays(i);

                DayScheduleModel day = new DayScheduleModel()
                {
                    Name = today.Day + "-" + today.Month + "-" + today.Year,
                    FullDate = today,
                    Day = today.Day,
                    Month = today.Month,
                    Year = today.Year,
                    Workday = true,
                    Schedules = new List<ScheduleModel>()
                };

                if (today.DayOfWeek == DayOfWeek.Sunday)
                    day.Workday = false;

                week.Add(day);
            }

            return (week);
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
                description = "EF-1B",
                year = 1
            });
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
                description = "EF-1A",
                year = 1
            });
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

        [HttpPost]
        public async Task<ActionResult<string>> SalvarPlanoCiclo(Cycle model)
        {
            Cycle cycle =
                (from current in _db.Cycles
                 where current.School == model.School
                 && current.Type == model.Type
                 select current).FirstOrDefault();

            bool newItem = false;

            if (cycle == null)
            {
                cycle = new Cycle();
                cycle.NewID();
                cycle.CreatedAt = DateTime.Now;
                newItem = true;
            }

            cycle.ModifiedAt = DateTime.Now;
            cycle.School = model.School;
            cycle.Type = model.Type;
            cycle.Description = model.Description;
            cycle.SelectedKnowledgeMatrix = model.SelectedKnowledgeMatrix;
            cycle.SelectedODS = model.SelectedODS;
            cycle.ModifiedBy = model.ModifiedBy;

            try
            {
                if (newItem == true)
                    await _db.Cycles.AddAsync(cycle);

                await _db.SaveChangesAsync();
            }
            catch
            {
                return (StatusCode(500));
            }

            return (Ok());
        }

        [HttpPost]
        public async Task<ActionResult<string>> AbrirPlanoCiclo(Cycle model)
        {
            Cycle result =
                (from current in _db.Cycles
                 where current.Type == model.Type
                 && current.School == model.School
                 select current).SingleOrDefault();

            if (result != null)
                return (Ok(result));
            else
                return (NotFound());
        }

        [HttpPost]
        public async Task<ActionResult<string>> SalvarPlanoAnual(AnnualPlanModel model)
        {
            Planning planning =
                (from current in _db.Plannings.Include(x => x.AnnualPlan)
                 where current.UserId == model.Username
                 && current.School == model.School
                 && current.Year == model.Year
                 && current.Classroom == model.Classroom
                 select current).FirstOrDefault();

            if (planning == null)
            {
                planning = new Planning();
                planning.NewID();
                planning.CreatedAt = DateTime.Now;
                planning.UserId = model.Username;
                planning.School = model.School;
                planning.Year = model.Year;
                planning.Classroom = model.Classroom;

                await _db.Plannings.AddAsync(planning);
            }

            planning.ModifiedAt = DateTime.Now;

            if (planning.AnnualPlan == null)
            {
                planning.AnnualPlan = new AnnualPlan();
                planning.AnnualPlan.CreatedAt = DateTime.Now;
            }

            planning.AnnualPlan.ModifiedAt = DateTime.Now;
            planning.AnnualPlan.SelectedLearningObjectivesB1 = model.SelectedLearningObjectivesB1;
            planning.AnnualPlan.SelectedLearningObjectivesB2 = model.SelectedLearningObjectivesB2;
            planning.AnnualPlan.SelectedLearningObjectivesB3 = model.SelectedLearningObjectivesB3;
            planning.AnnualPlan.SelectedLearningObjectivesB4 = model.SelectedLearningObjectivesB4;
            planning.AnnualPlan.DescriptionB1 = model.DescriptionB1;
            planning.AnnualPlan.DescriptionB2 = model.DescriptionB2;
            planning.AnnualPlan.DescriptionB3 = model.DescriptionB3;
            planning.AnnualPlan.DescriptionB4 = model.DescriptionB4;

            await _db.SaveChangesAsync();


            // Daqui pra baixo tem que arrumar

            //if (planning != null)
            //{
            //    await _db.SaveChangesAsync();
            //}
            //else
            //{
            //    try
            //    {
            //        await _db.Annuals.AddAsync(annual);
            //        await _db.SaveChangesAsync();
            //    }
            //    catch
            //    {
            //        return (BadRequest());
            //    }
            //}

            return (Ok());
        }

        [HttpPost]
        public async Task<ActionResult<string>> AbrirPlanoAnual(PlanningModel model)
        {
            Planning planning =
                (from current in _db.Plannings.Include(x => x.AnnualPlan)
                 where current.UserId == model.Username
                 && current.School == model.School
                 && current.Year == model.Year
                 && current.Classroom == model.Classroom
                 select current).FirstOrDefault();

            if (planning != null && planning.AnnualPlan != null)
            {
                AnnualPlanModel result = new AnnualPlanModel()
                {
                    SelectedLearningObjectivesB1 = planning.AnnualPlan.SelectedLearningObjectivesB1,
                    SelectedLearningObjectivesB2 = planning.AnnualPlan.SelectedLearningObjectivesB2,
                    SelectedLearningObjectivesB3 = planning.AnnualPlan.SelectedLearningObjectivesB3,
                    SelectedLearningObjectivesB4 = planning.AnnualPlan.SelectedLearningObjectivesB4,
                    DescriptionB1 = planning.AnnualPlan.DescriptionB1,
                    DescriptionB2 = planning.AnnualPlan.DescriptionB2,
                    DescriptionB3 = planning.AnnualPlan.DescriptionB3,
                    DescriptionB4 = planning.AnnualPlan.DescriptionB4
                };

                return (Ok(result));
            }

            return (NotFound());
        }

        [HttpPost]
        public async Task<ActionResult<string>> SalvarHorarioAula(ClassScheduleModel model)
        {
            Planning planning =
                (from current in _db.Plannings.Include(x => x.ClassSchedules)
                 where current.UserId == model.Username
                 && current.School == model.School
                 && current.Year == model.Year
                 && current.Classroom == model.Classroom
                 select current).FirstOrDefault();

            if (planning == null)
            {
                planning = new Planning();
                planning.NewID();
                planning.CreatedAt = DateTime.Now;
                planning.UserId = model.Username;
                planning.School = model.School;
                planning.Year = model.Year;
                planning.Classroom = model.Classroom;

                await _db.Plannings.AddAsync(planning);
            }

            planning.ModifiedAt = DateTime.Now;

            if (planning.ClassSchedules == null)
                planning.ClassSchedules = new List<ClassSchedule>();

            ClassSchedule classSchedule = null;

            foreach (ClassSchedule current in planning.ClassSchedules)
                if (current.Date == model.Date)
                    classSchedule = current;

            if (classSchedule == null)
            {
                classSchedule = new ClassSchedule();
                classSchedule.NewID();
                classSchedule.CreatedAt = DateTime.Now;
                classSchedule.ModifiedAt = DateTime.Now;
                classSchedule.Date = model.Date;
                classSchedule.TagColor = model.TagColor;
                planning.ClassSchedules.Add(classSchedule);
            }
            else
            {
                classSchedule.ModifiedAt = DateTime.Now;
                classSchedule.TagColor = model.TagColor;
            }

            try
            {
                await _db.SaveChangesAsync();
            }
            catch
            {
                return (StatusCode(500));
            }

            return (Ok());
        }

        [HttpPost]
        public async Task<ActionResult<string>> AbrirHorarioAula(ClassScheduleModel model)
        {
            Planning planning =
                (from current in _db.Plannings.Include(x => x.ClassSchedules)
                 where current.UserId == model.Username
                 && current.School == model.School
                 && current.Year == model.Year
                 && current.Classroom == model.Classroom
                 select current).FirstOrDefault();

            List<ClassScheduleModel> result = new List<ClassScheduleModel>();

            if (planning != null && planning.ClassSchedules != null)
            {
                result =
                    (from current in planning.ClassSchedules
                     where current.Date.Day == model.Date.Day
                     && current.Date.Month == model.Date.Month
                     && current.Date.Year == model.Date.Year
                     select new ClassScheduleModel
                     {
                         Date = current.Date,
                         TagColor = current.TagColor
                     }).ToList();
            }

            return (Ok(result));
        }

        [HttpPost]
        public async Task<ActionResult<string>> AbrirCalendarioAula(ClassScheduleModel model)
        {
            Planning planning =
                (from current in _db.Plannings.Include(x => x.ClassSchedules)
                 where current.UserId == model.Username
                 && current.School == model.School
                 && current.Year == model.Year
                 && current.Classroom == model.Classroom
                 select current).FirstOrDefault();

            List<ClassScheduleModel> result = new List<ClassScheduleModel>();
            CalendarModel calendar = CreateCalendar();

            if (planning != null && planning.ClassSchedules != null)
            {
                result =
                    (from current in planning.ClassSchedules
                     where current.Date >= calendar.Weeks[0][0].FullDate
                     && current.Date <= calendar.Weeks[4][6].FullDate
                     select new ClassScheduleModel
                     {
                         Date = current.Date,
                         TagColor = current.TagColor
                     }).ToList();

                for (int i = 0; i < 5; i++)
                    for (int j = 0; j < 7; j++)
                    {
                        calendar.Weeks[i][j].Schedules =
                            (from current in result
                             where current.Date.Day == calendar.Weeks[i][j].Day
                             && current.Date.Month == calendar.Weeks[i][j].Month
                             && current.Date.Year == calendar.Weeks[i][j].Year
                             select new ScheduleModel
                             {
                                 Color = current.TagColor,
                                 Time = current.Date.ToShortTimeString(),
                                 Name = model.Classroom,
                                 School = model.School.Substring(0, model.School.IndexOf("-") - 1),
                                 Day = current.Date.Day,
                                 Month = current.Date.Month,
                                 FullYear = current.Date.Year
                             }).ToList();
                    }
            }

            return (Ok(calendar));
        }

        [HttpPost]
        public async Task<ActionResult<string>> CarregarAlunosMock(PlanningModel model)
        {
            Planning planning =
                (from current in _db.Plannings.Include(x => x.AnnualPlan)
                 where current.UserId == model.Username
                 && current.School == model.School
                 && current.Year == model.Year
                 && current.Classroom == model.Classroom
                 select current).FirstOrDefault();

            if (planning != null)
            {
                if (_db.Students.Any() == false)
                {
                    List<Profile> people = new List<Profile>()
                    {
                        new Profile() { Name = "Ágatha Melo Pinto" },
                        new Profile() { Name = "André Cardoso Melo" },
                        new Profile() { Name = "Beatrice Cunha Castro" },
                        new Profile() { Name = "Bruna Pereira Araujo" },
                        new Profile() { Name = "Caio Goncalves Azevedo" },
                        new Profile() { Name = "Carlos Carvalho Lima" },
                        new Profile() { Name = "Daniel Gomes Santos" },
                        new Profile() { Name = "Davi Cunha Rodrigues" },
                        new Profile() { Name = "Diego Oliveira Fernandes" },
                        new Profile() { Name = "Diogo Rodrigues Almeida" },
                        new Profile() { Name = "Evelyn Gomes Santos" },
                        new Profile() { Name = "Fernanda Silva Carvalho" },
                        new Profile() { Name = "Gustavo Cardoso Castro" },
                        new Profile() { Name = "Isabela Barbosa Fernandes" },
                        new Profile() { Name = "Isabella Cardoso Dias" },
                        new Profile() { Name = "Júlia Goncalves Martins" },
                        new Profile() { Name = "Julieta Azevedo Costa" },
                        new Profile() { Name = "Kauã Fernandes Carvalho" },
                        new Profile() { Name = "Laura Cavalcanti Ferreira" },
                        new Profile() { Name = "Letícia Barros Cunha" },
                        new Profile() { Name = "Marisa Dias Ferreira" },
                        new Profile() { Name = "Nicolas Barbosa Cavalcanti" },
                        new Profile() { Name = "Paulo Melo Santos" },
                        new Profile() { Name = "Rodrigo Silva Dias" },
                        new Profile() { Name = "Ryan Goncalves Alves" },
                        new Profile() { Name = "Samuel Ferreira Silva" },
                        new Profile() { Name = "Sarah Melo Barbosa" },
                        new Profile() { Name = "Sophia Pereira Lima" },
                        new Profile() { Name = "Tânia Sousa Ferreira" },
                        new Profile() { Name = "Thiago Pereira Silva" },
                        new Profile() { Name = "Fernanda Almeida" }
                    };

                    Discipline discipline = new Discipline() { Name = "Disciplina Teste" };
                    discipline.NewID();

                    await _db.Disciplines.AddAsync(discipline);

                    int count = 0;
                    Code studentCode = new Code();
                    studentCode.NewID();
                    studentCode.Name = "Código de Chamada";

                    await _db.Codes.AddAsync(studentCode);

                    foreach (Profile person in people)
                    {
                        person.NewID();
                        person.Student = new Student();
                        person.Student.NewID();
                        person.Student.Codes = new List<StudentCode>();
                        person.Student.Codes.Add(new StudentCode()
                        {
                            Code = studentCode,
                            Validity = new DateTime(DateTime.Now.Year, 12, 20),
                            Value = (++count).ToString()
                        });
                        person.Student.Codes[0].NewID();

                        person.Student.Classes = new List<StudentClass>();
                        person.Student.Classes.Add(new StudentClass()
                        {
                            Year = DateTime.Now.Year,
                            Planning = planning
                        });
                        person.Student.Classes[0].NewID();
                    }

                    await _db.Profiles.AddRangeAsync(people);
                    await _db.SaveChangesAsync();
                }

                List<Models.Mocking.Student> result =
                    (from studentClasses in _db.StudentClasses.Include(x => x.Planning)
                     join student in _db.Students.Include(x => x.Profile).Include(x => x.Codes) on studentClasses.Student equals student
                     select new Models.Mocking.Student()
                     {
                         Id = student.Id,
                         Sequence = Convert.ToInt32(student.Codes.Where(x => x.Code.Name == "Código de Chamada").FirstOrDefault().Value),
                         Name = student.Profile.Name,
                         Attendance = 100
                     }).ToList();

                return (Ok(result.OrderBy(x => x.Sequence)));
            }

            return (NotFound());
        }

        #endregion -------------------- PUBLIC --------------------

        #endregion ==================== METHODS ====================
    }
}