using smeCore.Models.Academic;
using System;

namespace smeCore.Models.Organization
{
    public class StudentCode : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Value { get; set; }
        public DateTime Validity { get; set; }

        public virtual Code Code { get; set; }
        public virtual Student Student { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}