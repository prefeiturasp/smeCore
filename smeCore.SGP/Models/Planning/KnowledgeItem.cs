using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.SGP.Models.Planning
{
    public class KnowledgeItem
    {
        #region ==================== ATTRIBUTES ====================
        public int id { get; set; }
        public string title { get; set; }
        public string know_description { get; set; }
        public string for_description { get; set; }
        public int sequence { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
