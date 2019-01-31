using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using smeCore.Models.ClassroomTeacher;
using smeCore.SGP.Models;

namespace smeCore.API.Controllers.Turma
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurmaProfessor : ControllerBase
    {
        //private readonly SMESqlContext _context;

        //public TurmaProfessor(SMESqlContext context)
        //{
        //    _context = context;
        //}


        // GET: api/Classrooms/5
        [HttpGet("{id}")]
        public List<turmaProfessorModel> GetClassroom(string id)
        {
            //    var classroom = await _context.ClassroomTeacher.FindAsync(id);
            //    if (classroom == null)
            //    {
            //        return NotFound();
            //    }
            //    return classroom; Username=Educacao\277758128;Password=8128#SME@;
            string connectionString = @"Server=10.49.16.23\SME_PRD;Database=GestaoPedagogica;User Id=Caique.Santos;Password=Antares2014;"; //@"Data Source=MACORATTI;Initial Catalog=CadastroDB;Integrated Security=True;";
            var lClassroomTeacher = new List<ClassroomTeacher>();
            var lFilterClassroom = new List<turmaProfessorModel>();
           
            using (SqlConnection con = new SqlConnection(connectionString))

            {

                try
                {
                    SqlCommand cmd = new SqlCommand("API_CoreSme_BuscaTurmasAtribuidasDocente", con);
                    cmd.Parameters.Add(new SqlParameter("@usu_login", id));

                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlDataReader reader;

                    con.Open();
                    reader = cmd.ExecuteReader();

                    var lstring = new List<string>();
                    while (reader.Read())
                    {


                        string filtroTurma;
                        string ano = Convert.ToDateTime(reader["Ano"]).ToString();
                        ano = ano.Substring(6, 4);

                        filtroTurma = ano + " - ";
                        filtroTurma += reader["Turma"].ToString() + " - ";
                        filtroTurma += reader["Nome"].ToString();



                        var turmaProfessor = new turmaProfessorModel();
                        turmaProfessor.value = filtroTurma;
                        turmaProfessor.label = filtroTurma;

                        if(lstring.Contains(filtroTurma) == false)
                        {
                            lstring.Add(filtroTurma);
                            lFilterClassroom.Add(turmaProfessor);

                        }




                        // lClassroomTeacher.Add(classrommTeacher);
                    }

                
                }
                catch (Exception ex)
                {
                    throw;
                }
            }



            lFilterClassroom.Select(x => x.label).Distinct();
            return lFilterClassroom;

        }
        //private bool ClassroomExists(int id)
        //{
        //    return _context.ClassroomTeacher.Any(e => e.id == id);
        //}
    }
}
