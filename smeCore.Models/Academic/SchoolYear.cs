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

        public virtual List<SchoolTerm> SchoolTerms { get; set; }
        public virtual List<SchoolCalendar> SchoolCalendars { get; set; }
        public virtual List<ClassModeCalendar> ClassModeCalendars { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
