using System;

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

        #endregion ==================== ATTRIBUTES ====================
    }
}