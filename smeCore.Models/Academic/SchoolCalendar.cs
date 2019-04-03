namespace smeCore.Models.Academic
{
    public class SchoolCalendar : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public virtual School School { get; set; }
        public virtual SchoolYear SchoolYear { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}