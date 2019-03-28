using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class RegionalBoardEducation : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }
        public string Acronym { get; set; }

        public virtual List<School> Schools { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}