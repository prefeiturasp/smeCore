using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.SGP.Models.Planning
{
    public class AnnualPlanModel
    {
        public string Username { get; set; }
        public int Year { get; set; }
        public string Classroom { get; set; }
        public string School { get; set; }
        public string SelectedLearningObjectivesB1 { get; set; }
        public string SelectedLearningObjectivesB2 { get; set; }
        public string SelectedLearningObjectivesB3 { get; set; }
        public string SelectedLearningObjectivesB4 { get; set; }
        public string DescriptionB1 { get; set; }
        public string DescriptionB2 { get; set; }
        public string DescriptionB3 { get; set; }
        public string DescriptionB4 { get; set; }
    }
}
