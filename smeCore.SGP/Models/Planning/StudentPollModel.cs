using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.SGP.Models.Planning
{
    public class PollModel
    {
        public string Username { get; set; }
        public int Year { get; set; }
        public string Classroom { get; set; }
        public string School { get; set; }
        public List<StudentPollModel> Students { get; set; }
    }

    public class StudentPollModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Sequence { get; set; }
        public PollResultsModel PollResults { get; set; }
    }

    public class PollResultsModel
    {
        public PollPortugueseModel Portuguese { get; set; }
    }

    public class PollPortugueseModel
    {
        public string T1e { get; set; }
        public string T1l { get; set; }
        public string T2e { get; set; }
        public string T2l { get; set; }
        public string T3e { get; set; }
        public string T3l { get; set; }
        public string T4e { get; set; }
        public string T4l { get; set; }
    }
}
