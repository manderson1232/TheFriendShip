using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TheFriendShip.Models;

namespace TheFriendShip.Data
{
    public class TheFriendShipDbContext : IdentityDbContext<User>
    {
        public TheFriendShipDbContext (DbContextOptions<TheFriendShipDbContext> options) : base(options)
        {
        }
        //public DbSet<TheFriendShip.Models.Product> Product { get; set; }
    }
}
