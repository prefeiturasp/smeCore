namespace smeCore.Models.Entity
{
    public class Profile : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }

        public string UserId { get; set; }
        public virtual Authentication.User User { get; set; }
        public virtual Academic.Student Student { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}