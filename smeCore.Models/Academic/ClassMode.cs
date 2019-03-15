using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Academic
{
    public class ClassMode : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public string Name { get; set; }
        public string Acronym { get; set; }

        public virtual List<SchoolClass> SchoolClasses { get; set; }
        public virtual List<ClassModeCalendar> SpecialCalendars { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
