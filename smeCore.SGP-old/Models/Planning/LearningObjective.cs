using System;

namespace smeCore.SGP.Models.Planning
{
    public class LearningObjective
    {
        #region ==================== ATTRIBUTES ====================

        public int id { get; set; }
        public string year { get; set; }
        public string code { get; set; }
        public string description { get; set; }
        public int curricular_component_id { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }

        #endregion ==================== ATTRIBUTES ====================



        #region ==================== METHODS ====================

        /// <summary>
        /// Limpa os caracteres indesejados do campo 'code'
        /// </summary>
        public void CleanCode()
        {
            if (string.IsNullOrEmpty(code) == false)
            {
                code = code
                    .Replace("(", "")
                    .Replace(")", "")
                    .Replace(" ", "");
            }
        }

        #endregion ==================== METHODS ====================
    }
}