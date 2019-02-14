using System;

namespace smeCore.Models.Academic
{
    public class ClassAbsence : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public DateTime Date { get; set; }

        public virtual StudentClass StudentClass { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}