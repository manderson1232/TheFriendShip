using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheFriendShip.Models
{
    public class LoginVM
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
    public class LoginReturn
    {
        public string user { get; set; }
        public string tokenString { get; set; }
    }
}
