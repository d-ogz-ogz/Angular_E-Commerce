using BUSINESS.Contracts;
using SHARED.DataContracts;
using SHARED.Dtos;
using SHARED.Dtos.UserDtos;
using SHARED.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;

namespace BUSINESS.Implementatıns
{
    public class AuthBusinessEngine : IAuthBusinessEngine
    {
        private readonly IUnitOfWork _uow;
        public AuthBusinessEngine(IUnitOfWork uow)
        {
            _uow = uow;
        }


        public string Login(LoginUserDto loginUser)
        {

            LoginUserDto user = new LoginUserDto();
            if (loginUser.Email != null)
            {
                if (loginUser.Password != null)
                {
                    if (loginUser.Password != "")
                    {
                        loginUser.Email = user.Email;
                        loginUser.Password = user.Password;
                        loginUser.Password = loginUser.Password?.GetHashCode().ToString();
                    }

                    var UserData = this._uow.users.GetAll().ToList();
                    foreach (var u in UserData)
                    {
                        if (u.Email == loginUser.Email)
                        {
                            if (u.Password == loginUser.Password)
                            {
                                break;
                            }

                        }

                    }





                }
            }


            //hashle
            //karşılaştır
            //bool 
            //token 

            _uow.Save();

            return Guid.NewGuid() + "123".ToString();
        }


        public bool SendMail(string userMail)
        {
            var random = new Random();
            int code = random.Next(128626,999999);
            bool result = false;
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("deryaxxoguz@gmail.com");
            mail.To.Add(userMail);
            mail.Attachments.Add(new Attachment(""));
            mail.Subject = "Validate Your Registeration";
            mail.Body = "asdasdasdas + your code "+code ;
            SmtpClient smtp = new SmtpClient();
            smtp.Credentials = new System.Net.NetworkCredential("sender@sendermail.com", "password");
            smtp.Port = 25;
            smtp.Host = "smtp@derya.com";
            smtp.EnableSsl = true;
            try
            {
                smtp.SendAsync(mail, (object)mail);
                result = true;
            }
            catch (SmtpException ex)
            {
                _ = ex.Message;
                result = false;
            }

   




            return result;
        }
    

        public UserDto SaveUser(UserDto user)
        {



            try
            {
                UserDto newUser = new UserDto();

                newUser.Id = user.Id;
                newUser.FirstName = user.FirstName;
                newUser.LastName = user.LastName;
                newUser.UserName = user.UserName;
                newUser.Email = user.Email;
                newUser.Gender = user.Gender;
                newUser.Password = user.Password;/*!.GetHashCode().ToString();*/
                newUser.Customer_allow = user.Customer_allow;
                newUser.Customer_inform = user.Customer_inform;
                _uow.users.Add(newUser);
                _uow.Save();
                return newUser;

            }
            catch (Exception)
            {

                throw;
            }
        }


        //HASH ALGORITHM
        //const int keySize = 64;
        //const int iterations = 350000;
        //HashAlgorithmName hashAlgorithm = HashAlgorithmName.SHA512;
        //string HashPasword(string password) /*out byte[] salt*/
        //{
        //   var salt = RandomNumberGenerator.GetBytes(keySize);
        //    var hash = Rfc2898DeriveBytes.Pbkdf2(
        //        Encoding.UTF8.GetBytes(password),
        //        salt,
        //        iterations,
        //        hashAlgorithm,
        //        keySize);
        //    return Convert.ToHexString(hash);
        //}
    }





}

