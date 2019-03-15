using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
