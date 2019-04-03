using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class StudentClass : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public int Year { get; set; }

        public virtual Student Student { get; set; }
        public virtual List<ClassAbsence> Absences { get; set; }
        public virtual Planning Planning { get; set; }
        public virtual SchoolClass SchoolClass { get; set; }

        public string PollsId { get; set; }
        public virtual ClassPoll Polls { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}