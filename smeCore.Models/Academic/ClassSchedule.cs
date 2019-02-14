using System;

namespace smeCore.Models.Academic
{
    public class ClassSchedule : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================

        public DateTime Date { get; set; }
        public string TagColor { get; set; }

        public virtual Planning Planning { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}