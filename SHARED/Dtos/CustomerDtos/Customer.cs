using SHARED.DbModels.AdressModels;
using SHARED.DbModels.OrderModels;
using SHARED.Dtos.OrderDtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DbModels.CustomerModels
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? UserName { get; set; }

    }
}
