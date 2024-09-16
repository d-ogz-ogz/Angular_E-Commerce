using SHARED.DbModels.OrderModels;
using SHARED.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.Models.OrderModels
{
    public class OrderItemDto
    {

        public int? Id { get; set; }
        public int? ItemId { get; set; }
        public string? Beverage { get; set; }
        public string? Size { get; set; }
        public int Quantity { get; set; }
        public string? ItemName { get; set; }
        public bool? IsRemoved { get; set; }
        public decimal? Price { get; set; }
        public virtual OrderDto? Order { get; set; } //BİRE BİR
        public List<ItemDto>? Item { get; set; }
    }
}
