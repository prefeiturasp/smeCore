using System;

namespace smeCore.Models.Academic
{
    public class ClassSchedule : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================

        public DateTime Date { get; set; }
        public string TagColor { get; set; }
        public string LearninObjectives { get; set; }
        public string ClassroomDevelopment { get; set; }
        public string ContinuousRecovery { get; set; }
        public string Homework { get; set; }

        public virtual Planning Planning { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}