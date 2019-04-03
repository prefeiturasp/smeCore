using System;
using System.Collections.Generic;

namespace smeCore.SGP.Models.Planning
{
    public class CopyClassScheduleModel
    {
        public string Username { get; set; }
        public int Year { get; set; }
        public string Classroom { get; set; }
        public string School { get; set; }
        public DateTime Date { get; set; }
        public string CopyToClassroom { get; set; }
        public string CopyToSchool { get; set; }
        public List<DateTime> CopyDates { get; set; }
        public bool LearningObjectives { get; set; }
        public bool ClassDevelopment { get; set; }
        public bool Homework { get; set; }
    }
}