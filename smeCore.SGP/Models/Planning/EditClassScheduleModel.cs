using System;
using System.Collections.Generic;

namespace smeCore.SGP.Models.Planning
{
    public class EditClassScheduleModel : PlanningModel
    {
        public DateTime Date { get; set; }
        public Dictionary<string, string> LearningObjectives { get; set; }
        public List<StudentAbsenceModel> StudentsAbsence { get; set; }
        public string ClassDevelopment { get; set; }
        public string ContinuousRecovery { get; set; }
        public string Homework { get; set; }
    }

    public class StudentAbsenceModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
    }
}