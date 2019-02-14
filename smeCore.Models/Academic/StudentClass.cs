using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class StudentClass : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public int Year { get; set; }

        public virtual Discipline Discipline { get; set; }
        public virtual Student Student { get; set; }
        public virtual List<ClassAbsence> Absences { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}