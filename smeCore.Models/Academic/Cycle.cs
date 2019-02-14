namespace smeCore.Models.Academic
{
    public class Cycle : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================

        public string School { get; set; }
        public Enumerators.CycleTypes Type { get; set; }
        public string Description { get; set; }
        public string SelectedKnowledgeMatrix { get; set; }
        public string SelectedODS { get; set; }
        public string ModifiedBy { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}