using System.Collections.Generic;

namespace smeCore.SGP.Models.Mocking
{
    public class Teacher
    {
        public string id { get; set; }
        public string name { get; set; }
        public List<School> schools { get; set; } = new List<School>();
    }

    public class School
    {
        public string id { get; set; }
        public string name { get; set; }
        public List<MyClass> classes { get; set; } = new List<MyClass>();
    }

    public class MyClass
    {
        public string id { get; set; }
        public string description { get; set; }
        public int year { get; set; }
        public int modality_id { get; set; }
        public List<int> curricular_component_ids { get; set; } = new List<int>();
    }
}