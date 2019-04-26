using System;

namespace smeCore.SGP.Models.Mocking
{
  public class Student
  {
    public string Id { get; set; }
    public int Sequence { get; set; }
    public string Name { get; set; }
    public double Attendance { get; set; }
  }

  public class StudentClassRoom
  {
    public int CodigoAluno { get; set; }
    public string NomeAluno { get; set; }
    public string NomeSocial { get; set; }
    public DateTime DataNascimento { get; set; }
    public string SituacaoMatricula { get; set; }
    public DateTime DataDaSituacao { get; set; }
    public int NumeroAluno { get; set; }
    public bool AEE { get; set; }
    public string NomeFrequencia { get; set; }
    public bool AlunoRecemMatriculado { get; set; }
  }
}
