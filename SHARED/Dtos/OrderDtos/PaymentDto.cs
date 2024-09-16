using SHARED.DbModels.CustomerModels;
using SHARED.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.Dtos.OrderDtos
{
    public class PaymentDetailsDto
    {
        public int Id { get; set; }
        public string? PaymentMethod { get; set; }
        public string? CardName { get; set; }
        public int CardNumber { get; set; }
        public int? SecurityCode { get; set; }
        public DateTime? Expiration { get; set; }
        public int UserId { get; set; }
        public virtual UserDto? User { get; set; }
    }
}



   

