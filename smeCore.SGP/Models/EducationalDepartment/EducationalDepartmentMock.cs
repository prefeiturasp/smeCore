using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smeCore.SGP.Models.EducationalDepartment
{
    public class EducationalDepartmentMock
    {
        public List<EducationalDepartment> EducationalDepartments()
        {
            List<EducationalDepartment> educationalDepartments = new List<EducationalDepartment>();

            #region ==================== MOCK DRE DIRETORIA REGIONAL DE EDUCACAO GUAIANASE ====================
            EducationalDepartment educationalDepartment = new EducationalDepartment();
            educationalDepartment.EolCode = "108500";
            educationalDepartment.Name = "DIRETORIA REGIONAL DE EDUCACAO GUAIANASES";
            educationalDepartment.Status = EducationalDepartmentStatus.Active;
            educationalDepartment.UpdatedAt = Convert.ToDateTime("2019-04-03 15:19:54.597");

            School school = new School();
            school.EolCode = "019476";
            school.InepCode = "";
            school.PapaCode = "";
            school.CieCode = "";
            school.Name = "MARIA APARECIDA DO NASCIMENTO, PROFA.";
            school.Type = SchoolType.EMEF;
            school.Shift = SchoolShift.G;
            school.Status = SchoolStatus.Active;
            school.Capacity = 300;
            school.CreateddAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            school.UpdatedAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            educationalDepartment.Schools.Add(school);

            school = new School();
            school.EolCode = "019455";
            school.InepCode = "";
            school.PapaCode = "";
            school.CieCode = "";
            school.Name = "CELIA REGINA ANDERY BRAGA, PROF";
            school.Type = SchoolType.EMEF;
            school.Shift = SchoolShift.G;
            school.Status = SchoolStatus.Active;
            school.Capacity = 200;
            school.CreateddAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            school.UpdatedAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            educationalDepartment.Schools.Add(school);

            school = new School();
            school.EolCode = "009148";
            school.InepCode = "";
            school.PapaCode = "";
            school.CieCode = "";
            school.Name = "ALEXANDRE VANNUCHI LEME";
            school.Type = SchoolType.EMEF;
            school.Shift = SchoolShift.G;
            school.Status = SchoolStatus.Active;
            school.Capacity = 100;
            school.CreateddAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            school.UpdatedAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            educationalDepartment.Schools.Add(school);

            educationalDepartments.Add(educationalDepartment);
            #endregion ==================== MOCK DRE DIRETORIA REGIONAL DE EDUCACAO GUAIANASE ====================


            #region ==================== DIRETORIA REGIONAL DE EDUCACAO FREGUESIA/BRASILANDIA ====================
            educationalDepartment = new EducationalDepartment();
            educationalDepartment.EolCode = "108400";
            educationalDepartment.Name = "DIRETORIA REGIONAL DE EDUCACAO FREGUESIA/BRASILANDIA";
            educationalDepartment.Status = EducationalDepartmentStatus.Active;
            educationalDepartment.UpdatedAt = Convert.ToDateTime("2019-04-03 15:19:54.597");

            school = new School();
            school.EolCode = "099783";
            school.InepCode = "";
            school.PapaCode = "";
            school.CieCode = "";
            school.Name = "GERALDO SESSO JUNIOR";
            school.Type = SchoolType.EMEF;
            school.Shift = SchoolShift.G;
            school.Status = SchoolStatus.Active;
            school.Capacity = 300;
            school.CreateddAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            school.UpdatedAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            educationalDepartment.Schools.Add(school);

            school = new School();
            school.EolCode = "019349";
            school.InepCode = "";
            school.PapaCode = "";
            school.CieCode = "";
            school.Name = "JARDIM DAMASCENO I";
            school.Type = SchoolType.EMEF;
            school.Shift = SchoolShift.G;
            school.Status = SchoolStatus.Active;
            school.Capacity = 200;
            school.CreateddAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            school.UpdatedAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            educationalDepartment.Schools.Add(school);

            school = new School();
            school.EolCode = "094358";
            school.InepCode = "";
            school.PapaCode = "";
            school.CieCode = "";
            school.Name = "ANGELINA MAFFEI VITA, DA.";
            school.Type = SchoolType.EMEF;
            school.Shift = SchoolShift.G;
            school.Status = SchoolStatus.Active;
            school.Capacity = 100;
            school.CreateddAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            school.UpdatedAt = Convert.ToDateTime("2014-02-03 12:27:26.483");
            educationalDepartment.Schools.Add(school);

            educationalDepartments.Add(educationalDepartment);
            #endregion ==================== DIRETORIA REGIONAL DE EDUCACAO FREGUESIA/BRASILANDIA ====================

            return educationalDepartments;
        }

    }
}