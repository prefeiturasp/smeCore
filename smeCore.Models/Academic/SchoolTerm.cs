using System;

namespace smeCore.Models.Academic
{
    public class SchoolTerm : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }
        public DateTime ValidityStart { get; set; }
        public DateTime ValidityEnd { get; set; }
        public DateTime ClosureStart { get; set; }
        public DateTime ClosureEnd { get; set; }
        public DateTime ReportCardConsolidation { get; set; }

        public virtual SchoolYear SchoolYear { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}