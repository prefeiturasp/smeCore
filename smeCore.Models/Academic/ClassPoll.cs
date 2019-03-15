using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Academic
{
    public class ClassPoll : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public virtual StudentClass StudentClass { get; set; }

        public string PollPortugueseId { get; set; }
        public virtual PollPortuguese PollPortuguese { get; set; }
        #endregion ==================== ATTRIBUTES ====================



        #region ==================== CONSTRUCTORS ====================
        #endregion ==================== CONSTRUCTORS ====================



        #region ==================== METHODS ====================
        #endregion ==================== METHODS ====================
    }
}
