namespace smeCore.Models.Authentication
{
    public class AccessPermissionRole : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public virtual AccessPermission AccessPermission { get; set; }
        public virtual Role Role { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}