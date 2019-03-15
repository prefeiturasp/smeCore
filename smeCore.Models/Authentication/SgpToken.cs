using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smeCore.Models.Authentication
{
    public class SgpToken
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; }
    }
}
