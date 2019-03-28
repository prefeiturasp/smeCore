using System.Collections.Generic;

namespace smeCore.Models.Authentication
{
    public class AccessPermission : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }
        public string Location { get; set; }

        public virtual List<AccessPermissionRole> AccessPermissionRoles { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}