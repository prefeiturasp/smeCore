using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Xunit;
using smeCore.SGP.Contexts;
using smeCore.SGP.Controllers;
using smeCore.Models;
using smeCore.Models.Academic;
using smeCore.SGP.Models.Planning;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using smeCore.Models.Academic.Enumerators;

namespace smeCore.SGP.Test
{
    public class PlanejamentoTest
    {
        private SMEContext _db; // Objeto context referente ao banco smeCoreDB
        private static string connectionString = "Server=localhost;Port=5432;Database=sgpDB;Username=postgres;Password=postgres1234;";
        private static DbContextOptions<SMEContext> dbContextOptions { get; }

        static PlanejamentoTest()
        {
            dbContextOptions = new DbContextOptionsBuilder<SMEContext>()
                .UseNpgsql(connectionString)
                .Options;
        }

        #region -------------------- Objetivos Aprendizagem --------------------
        /// <summary>
        /// Método para testar se é listado os objetivos de aprendizagem
        /// sem passar atributo ano
        /// </summary>
        [Fact]
        public async void Task_ListarObjetivosAprendizagem_Result()
        {
            //Arrange
            _db = new SMEContext(dbContextOptions);
            var controller = new PlanejamentoController(_db);

            //Act
            var resulTask = await controller.ListarObjetivosAprendizagem();

            //Assert
            Assert.IsType<string>(resulTask.Value);
        }


        /// <summary>
        /// Método para testar se é retornado o resultado esperado
        /// passando atributo ano = 2019
        /// </summary>
        [Fact]
        public async void Task_ListarObjetivosAprendizagemAno_OkObjectResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);

            //Act
            var resulTask = await controller.ListarObjetivosAprendizagem("2019");

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }

        #endregion -------------------- Objetivos Aprendizagem --------------------

        #region -------------------- Matriz Saberes --------------------
        /// <summary>
        /// Método para testar a Matriz de Saberes estão acessíveis
        /// </summary>
        [Fact]
        public async void Task_ListarMatrizSaberes_OkObjetctResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);

            //Act
            var resulTask = await controller.ListarMatrizSaberes();

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }

        #endregion -------------------- Matriz Saberes --------------------

        #region -------------------- Objetivos de Desenvolvimento Sustentável (ODS) --------------------
        /// <summary>
        /// Método para testar se é retornado os Objetivos de Desenvolvimento Sustentável (ODS)
        /// estão acessíveis
        /// </summary>
        [Fact]
        public async void Task_ListarODS_OkObjetctResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);

            //Act
            var resulTask = await controller.ListarODS();

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }
        #endregion -------------------- Objetivos de Desenvolvimento Sustentável (ODS) --------------------

        #region -------------------- Plano de Ciclo -------------------- 
        /// <summary>
        /// Método para testar se retorna erro ao tentar abrir o Plano de Clico sem passar parâmetro
        /// </summary>
        [Fact]
        public async void Task_AbrirPlanoCiclo_NotFoundResult()
        {
            //Arrange

            var controller = new PlanejamentoController(_db);
            Cycle model = new Cycle();

            //Act
            var resulTask = await controller.AbrirPlanoCiclo(model);

            //Assert
            Assert.IsType<NotFoundResult>(resulTask.Result);
        }


        /// <summary>
        /// Método para testar se está retornando um plano de Ciclo
        /// </summary>
        [Fact]//TODO fazer o teste da abertura de um plano de ciclo, falta passar parâmetros corretos
        public async void Task_AbrirPlanoCiclo_OkObjectResult()
        {
            //Arrange
            _db = new SMEContext(dbContextOptions);
            var controller = new PlanejamentoController(_db);
            Cycle model = new Cycle();
            model.School = "Escola";
            model.Type = CycleTypes.Alfabetizacao;
            //Act
            var resulTask = await controller.AbrirPlanoCiclo(model);

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }

        #endregion -------------------- Plano de Ciclo --------------------

        #region -------------------- Professor --------------------
        /// <summary>
        /// Teste para verificar se está puxando as turmas do professor
        /// atualmente está usando Mock para pegar as turmas ficticias
        /// </summary>
        [Fact]
        public async void Task_CarregarTurmasProfessor_OkObjectResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            //Act
            var resulTask = await controller.CarregarTurmasProfessor("username");

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }
        #endregion -------------------- Professor --------------------

        #region -------------------- Plano Anual --------------------

        /// <summary>
        /// Método para testar a falha quando se tentar abrir o Plano Anual
        /// </summary>
        [Fact]
        public async void Task_AbrirPlanoAnual_NotFoundResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            PlanningModel model = new PlanningModel();
            //Act
            var resulTask = await controller.AbrirPlanoAnual(model);

            //Assert
            Assert.IsType<NotFoundResult>(resulTask.Result);
        }

        /// <summary>
        /// Método para testar a abertura do Plano Anual
        /// </summary>
        [Fact]//TODO: fazer ajustes Task_AbrirPlanoAnual_OkObjectResult
        public async void Task_AbrirPlanoAnual_OkObjectResult()
        {
            //Arrange
            _db = new SMEContext(dbContextOptions);
            var controller = new PlanejamentoController(_db);
            PlanningModel model = new PlanningModel();
            model.Username = "";
            model.School = "";
            model.Year = DateTime.Now.Year;
            model.Classroom = "";
            //Act
            var resulTask = await controller.AbrirPlanoAnual(model);

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }

        #endregion -------------------- Plano Anual --------------------

        #region -------------------- Horario Aula --------------------
        /// <summary>
        /// Método para testar a falha quando se tentar abrir o Horario de Aula
        /// </summary>
        [Fact]
        public async void Task_AbrirHorarioAula_NotFoundResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            ClassScheduleModel model = new ClassScheduleModel();
            //Act
            var resulTask = await controller.AbrirHorarioAula(model);

            //Assert
            Assert.IsType<NotFoundResult>(resulTask.Result);
        }

        /// <summary>
        /// Método para testar a abertura do Horário de Aula
        /// </summary>
        [Fact]//TODO: fazer ajustes Task_AbrirHorarioAula_OkObjectResult
        public async void Task_AbrirHorarioAula_OkObjectResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            ClassScheduleModel model = new ClassScheduleModel();
            model.Username = "";
            model.School = "";
            model.Year = DateTime.Now.Year;
            model.Classroom = "";

            //Act
            var resulTask = await controller.AbrirHorarioAula(model);

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }
        #endregion -------------------- Horario Aula --------------------

        #region -------------------- Desenvolvimento de Aula --------------------
        /// <summary>
        /// Método para testar a falha quando se tentar abrir o Desenvolvimento de Aula
        /// </summary>
        [Fact]
        public async void Task_AbrirDesenvolvimentoAula_NotFoundResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            EditClassScheduleModel model = new EditClassScheduleModel();
            //Act
            var resulTask = await controller.AbrirDesenvolvimentoAula(model);

            //Assert
            Assert.IsType<NotFoundResult>(resulTask.Result);
        }

        /// <summary>
        /// Método para testar a abertura do Desenvolvimento de Aula
        /// </summary>
        [Fact]//TODO: fazer ajustes Task_AbrirDesenvolvimentoAula_OkObjectResult
        public async void Task_AbrirDesenvolvimentoAula_OkObjectResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            EditClassScheduleModel model = new EditClassScheduleModel();
            model.Username = "";
            model.School = "";
            model.Year = DateTime.Now.Year;
            model.Classroom = "";
            model.Date = DateTime.Now;

            //Act
            var resulTask = await controller.AbrirDesenvolvimentoAula(model);

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }
        #endregion -------------------- Desenvolvimento de Aula --------------------

        #region -------------------- Calendario de Aula --------------------
        /// <summary>
        /// Método para testar a falha quando se tentar abrir o Calendário de Aula
        /// </summary>
        [Fact]//TODO:  fazer ajustes Task_AbrirCalendarioAula_NotFoundResult
        public async void Task_AbrirCalendarioAula_NotFoundResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            ClassScheduleModel model = new ClassScheduleModel();
            //Act
            var resulTask = await controller.AbrirCalendarioAula(model);

            //Assert
            Assert.IsType<NotFoundResult>(resulTask.Result);
        }

        /// <summary>
        /// Método para testar a abertura do Calendário de Aula
        /// </summary>
        [Fact]
        public async void Task_AbrirCalendarioAula_OkObjectResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            ClassScheduleModel model = new ClassScheduleModel();
            model.Username = "";
            model.School = "";
            model.Year = DateTime.Now.Year;
            model.Classroom = "";
            //Act
            var resulTask = await controller.AbrirCalendarioAula(model);

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }
        #endregion -------------------- Calendario de Aula --------------------

        #region -------------------- Carregar Alunos Mock --------------------
        /// <summary>
        /// Método para testar a falha quando se tentar Carregar os Alunos
        /// </summary>
        [Fact]
        public async void Task_CarregarAlunosMock_NotFoundResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            PlanningModel model = new PlanningModel();
            //Act
            var resulTask = await controller.CarregarAlunosMock(model);

            //Assert
            Assert.IsType<NotFoundResult>(resulTask.Result);
        }
        #endregion -------------------- Carregar Alunos Mock --------------------

        #region -------------------- Calendario Ano Letivo --------------------
        /// <summary>
        /// Método para testar o carrregamento do Ano Letivo
        /// </summary>
        [Fact]
        public async void Task_CalendarioAnoLetivo_OkObjectResult()
        {
            //Arrange
            _db = new SMEContext(dbContextOptions);
            var controller = new PlanejamentoController(_db);

            //Act
            var resulTask = await controller.CalendarioAnoLetivo("", 2019);

            //Assert
            Assert.IsType<OkObjectResult>(resulTask.Result);
        }
        #endregion -------------------- Calendario Ano Letivo --------------------

        #region -------------------- Migrar Conteudo --------------------
        /// <summary>
        /// Método para testar o retorno de erro 500 ao tentar
        /// fazer a migração de conteúdo inválido
        /// </summary>
        [Fact]
        public async void Task_MigrarConteudo_500Result()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            CopyClassScheduleModel model = new CopyClassScheduleModel();

            //Act
            ActionResult<string> resulTask = await controller.MigrarConteudo(model);
            StatusCodeResult status = Assert.IsType<StatusCodeResult>(resulTask.Result);

            //Assert
            Assert.Equal(500, status.StatusCode);
        }
        #endregion -------------------- Migrar Conteudo --------------------

        #region -------------------- Alunos Sondagem --------------------
        /// <summary>
        /// Método para testar o carrregamento dos alunos da Sondagem
        /// </summary>
        [Fact]
        public async void Task_Sondagem_NotFoundResult()
        {
            //Arrange
            var controller = new PlanejamentoController(_db);
            PlanningModel model = new PlanningModel();
            //Act
            ActionResult<string> resulTask = await controller.CarregarAlunosSondagem(model);

            //Assert
            Assert.IsType<NotFoundResult>(resulTask.Result);
        }
        #endregion -------------------- Alunos Sondagem --------------------
    }
}
