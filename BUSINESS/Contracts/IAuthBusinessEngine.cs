using SHARED.Dtos;
using SHARED.Dtos.UserDtos;
using SHARED.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BUSINESS.Contracts
{
    public interface IAuthBusinessEngine
    {
        public UserDto SaveUser(UserDto user);
        public string Login(LoginUserDto loginUser);
        public bool SendMail(string userMail);
    }
}
