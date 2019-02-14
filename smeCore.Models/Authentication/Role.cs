using System.Collections.Generic;

namespace smeCore.Models.Authentication
{
    public class Role : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }

        public virtual List<UserRole> UserRoles { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}