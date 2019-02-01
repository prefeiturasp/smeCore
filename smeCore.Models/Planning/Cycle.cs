using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Planning
{
    public class Cycle : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public Enumerators.CycleTypes Type { get; set; }
        public string School { get; set; }
        public string Description { get; set; }
        public string SelectedKnowledgeMatrix { get; set; }
        public string SelectedODS { get; set; }
        public string ModifiedBy { get; set; }
        public string UserId { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
