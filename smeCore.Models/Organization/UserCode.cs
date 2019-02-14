namespace smeCore.Models.Organization
{
    public class UserCode : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Value { get; set; }

        public string CodeId { get; set; }
        public virtual Code Code { get; set; }
        public string UserId { get; set; }
        public virtual Authentication.User User { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}