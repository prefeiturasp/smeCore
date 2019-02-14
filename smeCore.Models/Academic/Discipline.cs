using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class Discipline : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public string Name { get; set; }

        public virtual List<StudentClass> StudentsClasses { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}