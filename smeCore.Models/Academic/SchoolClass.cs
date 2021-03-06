﻿using System.Collections.Generic;

namespace smeCore.Models.Academic
{
    public class SchoolClass : Base.Abstracts.Table
    {
        #region ==================== ATTRIBUTES ====================

        public int OfferedSeats { get; set; }
        public int Year { get; set; }
        public string Classroom { get; set; }

        public virtual ClassMode ClassMode { get; set; }
        public virtual School School { get; set; }
        public virtual List<StudentClass> StudentClasses { get; set; }
        public virtual List<Planning> Plannings { get; set; }

        #endregion ==================== ATTRIBUTES ====================
    }
}