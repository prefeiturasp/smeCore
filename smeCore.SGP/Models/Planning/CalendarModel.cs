using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.SGP.Models.Planning
{
    public class ScheduleModel
    {
        public string Id { get; set; }
        public string Color { get; set; }
        public string Time { get; set; }
        public string Name { get; set; }
        public string School { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int FullYear { get; set; }
    }

    public class DayScheduleModel
    {
        public int Key { get; set; }
        public string Name { get; set; }
        public DateTime FullDate { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public bool Workday { get; set; }

        public List<ScheduleModel> Schedules { get; set; }
    }

    public class CalendarModel
    {
        public List<List<DayScheduleModel>> Weeks { get; set; }
    }
}
