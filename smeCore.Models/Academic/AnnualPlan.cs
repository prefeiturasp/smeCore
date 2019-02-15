namespace smeCore.Models.Academic
{
    public class AnnualPlan : Base.Abstracts.LogTable
    {
        #region ==================== ATTRIBUTES ====================

        public string SelectedLearningObjectivesB1 { get; set; }
        public string SelectedLearningObjectivesB2 { get; set; }
        public string SelectedLearningObjectivesB3 { get; set; }
        public string SelectedLearningObjectivesB4 { get; set; }
        public string DescriptionB1 { get; set; }
        public string DescriptionB2 { get; set; }
        public string DescriptionB3 { get; set; }
        public string DescriptionB4 { get; set; }

        public string PlanningId { get; set; }
        public virtual Planning Planning { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}