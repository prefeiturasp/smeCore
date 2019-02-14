using System;

namespace smeCore.Models.Base.Abstracts
{
    public abstract class LogTable : Table
    {
        #region ==================== ATTRIBUTES ====================

        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}