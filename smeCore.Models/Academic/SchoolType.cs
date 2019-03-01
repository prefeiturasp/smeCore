using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Academic
{
    public class SchoolType : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================
        public string Name { get; set; }
        public string Acronym { get; set; }

        public virtual List<SchoolYearType> SchoolYearTypes { get; set; }
        #endregion



        #region ==================== CONSTRUCTORS ====================
        #endregion



        #region ==================== METHODS ====================
        #endregion
    }
}
