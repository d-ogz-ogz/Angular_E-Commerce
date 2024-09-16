using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;
using SHARED.Dtos.UserDtos;
using SHARED.UserDtos;

namespace UI.Controllers
{
    [Route("Auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthBusinessEngine _authEngine;
        public AuthController(IAuthBusinessEngine authEngine)
        {
            _authEngine = authEngine;
        }

        [HttpPost("Register")]
        public UserDto SaveUser([FromBody] UserDto user)
        {
            return this._authEngine.SaveUser(user);
            
        }
        [HttpPost("Login")]
        public string Login([FromBody] LoginUserDto loginUser )
        {
            var r = this._authEngine.Login(loginUser);
            return r;
        }
        [HttpPost("SendMail")]
        public bool SendMail(string userMail)
        {
            var res = this._authEngine.SendMail(userMail);
            return res;
        }
    }
}


//[HttpPost("login")]
//public async Task<IActionResult> Login([FromBody] CredentialModelDto model)
//{
//    try
//    {
//        var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);
//        if (result.Succeeded)
//        {
//            var user = await _userManager.FindByNameAsync(model.UserName);
//            if (user != null)
//            {
//                var tokenPacket = CreateToken(user);
//                if (tokenPacket != null && tokenPacket.Result.Token != null)
//                {
//                    return Ok(tokenPacket);
//                }
//            }
//        }
//    }
//    catch (Exception ex)
//    {

//        _logger.LogError($"Logging yapılırken hata oluştur : {ex}");
//    }
//    return BadRequest("Login Başarılı Olamadı.Lütfen Bilgilerinizi Kontrol Ediniz!");
//}

//[HttpPost("register")]
//public async Task<IActionResult> Register([FromBody] RegisterModelDto model)
//{
//    if (!ModelState.IsValid)
//        return BadRequest("Parametreler Hatalı");

//    try
//    {
//        var user = await _userManager.FindByNameAsync(model.UserName);
//        if (user != null)
//            return BadRequest("Bu Kullanıcı Zaten Mevcut");
//        else
//        {
//            user = new ApplicationUser
//            {
//                FirstName = model.FirstName,
//                LastName = model.LastName,
//                UserName = model.UserName,
//                Email = model.Email
//            };
//            var result = await _userManager.CreateAsync(user, model.Password);
//            if (result.Succeeded)
//                return Ok(CreateToken(user));
//            else
//                return BadRequest(result.Errors);
//        }
//    }
//    catch (Exception ex)
//    {
//        _logger.LogError($"Kayıt Esnasında Exception Hatası Alındı : {ex}");
//        return BadRequest($"Yeni Kullanıcı Kaydı esnasında Hata Alındı : {ex}");
//    }
//}

//[HttpPost("Token")]
//public async Task<IActionResult> CreateToken([FromBody] CredentialModelDto model)
//{
//    try
//    {
//        var user = await _userManager.FindByNameAsync(model.UserName);
//        if (user != null)
//        {
//            if (_hasher.VerifyHashedPassword(user, user.PasswordHash, model.Password) == PasswordVerificationResult.Success)
//            {
//                return Ok(CreateToken(user));
//            }
//        }
//    }
//    catch (Exception ex)
//    {
//        _logger.LogError($"JWT yaratırken bir hata oluştu: {ex.Message.ToString()}");
//    }
//    return null;
//}



//private async Task<JwtTokenPacket> CreateToken(ApplicationUser appUser)
//{
//    var userClaims = await _userManager.GetClaimsAsync(appUser);

//    var claims = new[]
//    {
//                new Claim(JwtRegisteredClaimNames.Sub,appUser.UserName),
//                new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
//            }.Union(userClaims);

//    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Token:Key"]));
//    var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

//    var token = new JwtSecurityToken(
//        issuer: _config["Token:Issuer"],
//        audience: _config["Token:Audience"],
//        claims: claims,
//        expires: DateTime.UtcNow.AddMinutes(20),
//        signingCredentials: cred);

//    return new JwtTokenPacket
//    {
//        Token = new JwtSecurityTokenHandler().WriteToken(token),
//        Expiration = token.ValidTo.ToString(),
//        UserName = appUser.UserName
//    };
//}
//    }
//}