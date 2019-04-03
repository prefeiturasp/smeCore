using System;
using System.Collections.Generic;

namespace smeCore.SGP.Models.Planning
{
    public class SchoolYearModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public List<SchoolTermModel> SchoolTerms { get; set; }
    }

    public class SchoolTermModel
    {
        public string Name { get; set; }
        public DateTime ValidityStart { get; set; }
        public DateTime ValidityEnd { get; set; }
        public DateTime ClosureStart { get; set; }
        public DateTime ClosureEnd { get; set; }
        public DateTime ReportCardConsolidation { get; set; }
    }
}