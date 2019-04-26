using smeCore.Models.Academic;
using System;
using System.Collections.Generic;

namespace smeCore.Models.Organization
{
    public class StudentCode : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Value { get; set; }
        public DateTime Validity { get; set; }
        public virtual Code Code { get; set; }
        public virtual Student Student { get; set; }
        public virtual List<ClassAbsence> Absence { get; set; }
        #endregion ==================== ATTRIBUTES ====================
    }
}