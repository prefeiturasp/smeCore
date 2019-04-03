using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class Discipline : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }

        public virtual List<Planning> Plannings { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}