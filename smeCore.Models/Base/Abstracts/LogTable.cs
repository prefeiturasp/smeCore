using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Base.Abstracts
{
    public abstract class LogTable : Table
    {
        #region ==================== ATTRIBUTES ====================
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
