using System;

namespace smeCore.Models.Base.Abstracts
{
    public abstract class Table
    {
        public string id { get; set; }

        public void NewID()
        {
            this.id = Guid.NewGuid().ToString();
        }
    }
}