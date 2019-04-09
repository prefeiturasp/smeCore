using System;
using System.ComponentModel.DataAnnotations;

namespace smeCore.SGP.Models.Planning
{
  public class ClassScheduleModel
  {
    public string Id { get; set; }
    public string Username { get; set; }
    public int Year { get; set; }
    public string Classroom { get; set; }
    public string School { get; set; }
    public DateTime Date { get; set; }
    public string TagColor { get; set; }
    public int ClassQuantity { get; set; }
    public string Repeat { get; set; }
  }
}
