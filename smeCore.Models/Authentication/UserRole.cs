namespace smeCore.Models.Authentication
{
    public class UserRole : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string RoleId { get; set; }
        public virtual Role Role { get; set; }
        public string UserId { get; set; }
        public virtual User User { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}