using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class SchoolYear : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }
        public int Year { get; set; }

        public virtual List<SchoolTerm> SchoolTerms { get; set; }
        public virtual List<SchoolCalendar> SchoolCalendars { get; set; }
        public virtual List<ClassModeCalendar> ClassModeCalendars { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}