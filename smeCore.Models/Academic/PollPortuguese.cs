using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Academic
{
    public class PollPortuguese : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public string T1E { get; set; }
        public string T1L { get; set; }
        public string T2E { get; set; }
        public string T2L { get; set; }
        public string T3E { get; set; }
        public string T3L { get; set; }
        public string T4E { get; set; }
        public string T4L { get; set; }

        public virtual ClassPoll ClassPoll { get; set; }
        #endregion ==================== ATTRIBUTES ====================



        #region ==================== CONSTRUCTORS ====================
        public PollPortuguese()
            : base()
        {
            T1E = "";
            T1L = "";
            T2E = "";
            T2L = "";
            T3E = "";
            T3L = "";
            T4E = "";
            T4L = "";
        }
        #endregion ==================== CONSTRUCTORS ====================



        #region ==================== METHODS ====================
        #endregion ==================== METHODS ====================
    }
}
