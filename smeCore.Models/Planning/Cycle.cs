namespace smeCore.Models.Planning
{
    public class Cycle : Abstracts.PlanningTable
    {
        #region ==================== ATTRIBUTES ====================

        public Enumerators.CycleTypes Type { get; set; }
        public string Description { get; set; }
        public string SelectedKnowledgeMatrix { get; set; }
        public string SelectedODS { get; set; }
        public string ModifiedBy { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}