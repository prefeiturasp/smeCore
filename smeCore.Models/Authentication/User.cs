using System.Collections.Generic;
using System.Net;

namespace smeCore.Models.Authentication
{
    public class User
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public Identity Identity { get; set; }
        public IEnumerable<Cookie> Cookies { get; set; }
    }
}