using System.Collections.Generic;

namespace smeCore.Models.Organization
{
    public class Code : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }

        public virtual List<UserCode> UserCodes { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}