using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Authentication
{
    public class AccessPermission : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================
        public string Name { get; set; }
        public string Location { get; set; }

        public virtual List<AccessPermissionRole> AccessPermissionRoles { get; set; }
        #endregion ==================== ATTRIBUTES ====================



        #region ==================== CONSTRUCTORS ====================
        #endregion ==================== CONSTRUCTORS ====================



        #region ==================== METHODS ====================
        #endregion ==================== METHODS ====================
    }
}
