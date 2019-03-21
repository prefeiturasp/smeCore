using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Authentication
{
    public class AccessPermissionRole : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public virtual AccessPermission AccessPermission { get; set; }
        public virtual Role Role { get; set; }
        #endregion ==================== ATTRIBUTES ====================



        #region ==================== CONSTRUCTORS ====================
        #endregion ==================== CONSTRUCTORS ====================



        #region ==================== METHODS ====================
        #endregion ==================== METHODS ====================
    }
}
