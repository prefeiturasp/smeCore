using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Academic
{
    public class ClassModeCalendar : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public virtual ClassMode ClassMode { get; set; }
        public virtual SchoolYear SchoolYear { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
