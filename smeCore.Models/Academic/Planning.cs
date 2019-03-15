using System;
using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class Planning : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================

        public int Year { get; set; }
        public string Classroom { get; set; }
        public string School { get; set; }
        public DateTime Date { get; set; }
        public string UserId { get; set; }

        public virtual AnnualPlan AnnualPlan { get; set; }
        public virtual List<ClassSchedule> ClassSchedules { get; set; }
        public virtual Discipline Discipline { get; set; }
        public virtual List<StudentClass> StudentClasses { get; set; }
        public virtual SchoolClass SchoolClass { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}