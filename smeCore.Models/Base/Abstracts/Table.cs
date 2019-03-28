using System;

namespace smeCore.Models.Base.Abstracts
{
    public abstract class Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Id { get; set; }

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== METHODS ====================

        public virtual void NewID()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        #endregion ==================== METHODS ====================
    }
}