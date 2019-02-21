using smeCore.Models.Academic;
using smeCore.Models.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Organization
{
    public class StudentCode : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public string Value { get; set; }
        public DateTime Validity { get; set; }

        public virtual Code Code { get; set; }
        public virtual Student Student { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
