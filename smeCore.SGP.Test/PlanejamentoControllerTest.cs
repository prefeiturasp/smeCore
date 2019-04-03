using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;
using smeCore.SGP.Controllers;
using smeCore.SGP.Contexts;

namespace smeCore.SGP.Test
{
    public class PlanejamentoControllerTest
    {
        private readonly SMEContext _db; // Objeto context referente ao banco smeCoreDB
        
        [Fact]
        public void TestOK()
        {
            //Arrange
            var controller = new PlanejamentoController(db);
            var testOK = true;
            //Act
            //var result = controller.Test(testOK);
            var result = false;
            //Assert
            Assert.True(result);

        }
    }
}
