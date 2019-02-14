using System.Collections.Generic;

namespace smeCore.Models.Authentication
{
    public class User : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }
        public string Password { get; set; }

        public virtual Entity.Profile Profile { get; set; }
        public virtual List<UserRole> Roles { get; set; }
        public virtual List<Organization.UserCode> Codes { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}