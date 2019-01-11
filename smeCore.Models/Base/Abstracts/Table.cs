using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
