using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Academic
{
    public class SchoolYear : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public string Name { get; set; }
        public int Year { get; set; }
        public DateTime Bimester1ValidityStart { get; set; }
        public DateTime Bimester1ValidityEnd { get; set; }
        public DateTime Bimester2ValidityStart { get; set; }
        public DateTime Bimester2ValidityEnd { get; set; }
        public DateTime Bimester3ValidityStart { get; set; }
        public DateTime Bimester3ValidityEnd { get; set; }
        public DateTime Bimester4ValidityStart { get; set; }
        public DateTime Bimester4ValidityEnd { get; set; }
        public DateTime Bimester1ClosureStart { get; set; }
        public DateTime Bimester1ClosureEnd { get; set; }
        public DateTime Bimester2ClosureStart { get; set; }
        public DateTime Bimester2ClosureEnd { get; set; }
        public DateTime Bimester3ClosureStart { get; set; }
        public DateTime Bimester3ClosureEnd { get; set; }
        public DateTime Bimester4ClosureStart { get; set; }
        public DateTime Bimester4ClosureEnd { get; set; }
        public DateTime ReportCardConsolidation { get; set; }

        public virtual List<SchoolCalendar> SchoolCalendars { get; set; }
        public virtual List<ClassModeCalendar> ClassModeCalendars { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
