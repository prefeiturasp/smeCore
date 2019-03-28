namespace smeCore.Models.Academic
{
    public class ClassModeCalendar : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public virtual ClassMode ClassMode { get; set; }
        public virtual SchoolYear SchoolYear { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}