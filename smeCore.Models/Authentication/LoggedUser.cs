using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Authentication
{
    public class LoggedUser : Base.Abstracts.Table
    {
        public string Username { get; set; }
        public string RefreshToken { get; set; }
        public DateTime LastLogin { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}
