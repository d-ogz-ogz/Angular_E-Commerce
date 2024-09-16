using SHARED.DbModels.AdressModels;
using SHARED.DbModels.CustomerModels;
using SHARED.Models.OrderModels;
using SHARED.UserDtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DbModels.OrderModels
{

    public class OrderDto
    {    public int? Id { get; set; }
        public OrderSubDto? OrderDetails { get; set; } //bire bir ilişki olacak
        public bool IsRemoved { get; set; }

        public List<OrderItemDto>? OrderItem { get; set; }
        public virtual UserDto? User { get; set; }

    }






}