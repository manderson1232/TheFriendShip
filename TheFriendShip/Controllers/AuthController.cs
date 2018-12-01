using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using TheFriendShip.Data;
using TheFriendShip.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheFriendShip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AuthController(UserManager<User> userManager, SignInManager<User> signinman)
        {
            _userManager = userManager;
            _signInManager = signinman;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginVM user)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(user.UserName, user.Password, false, false);
                if (result.Succeeded)
                {
                    return Ok("Login succeeded");
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                }
            }
            return BadRequest(ModelState);
        }


        [HttpGet]
        public string Get()
        {
            return "Test succeeded";
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterVM user)
        {
            User newUser = new User { UserName = user.UserName };
            var result = await _userManager.CreateAsync(newUser, user.Password);

            if (result.Succeeded)
            {
                return Ok(new { Msg = "Registration succeeded", User = newUser.UserName, ID = newUser.Id });
            }
            return BadRequest(result);
        }
    }
}
