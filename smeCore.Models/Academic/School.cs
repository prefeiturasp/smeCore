using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class School : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }
        public Enumerators.SchoolType SchoolType { get; set; }

        public virtual List<SchoolClass> Classes { get; set; }
        public virtual RegionalBoardEducation RegionalBoardEducation { get; set; }
        public virtual List<SchoolCalendar> SchoolCalendars { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}