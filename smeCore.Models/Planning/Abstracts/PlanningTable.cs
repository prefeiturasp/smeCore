using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Planning.Abstracts
{
    public abstract class PlanningTable : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================
        public int? SchoolYear { get; set; }
        public string Classroom { get; set; }
        public string School { get; set; }
        public string UserId { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
