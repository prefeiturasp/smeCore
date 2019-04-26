using smeCore.Models.Organization;
using System;

namespace smeCore.Models.Academic
{
    public class ClassAbsence : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public DateTime Date { get; set; }
        public string CodeEol { get; set; }
        public virtual StudentClass StudentClass { get; set; }
        public virtual StudentCode StudentCode { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}