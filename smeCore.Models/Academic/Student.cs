using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class Student : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public virtual List<StudentClass> Classes { get; set; }

        public string ProfileId { get; set; }
        public virtual Entity.Profile Profile { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}