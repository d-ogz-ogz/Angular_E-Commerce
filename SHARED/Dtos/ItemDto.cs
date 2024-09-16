using SHARED.Models.OrderModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.Dtos
{
    public class ItemDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public decimal? Price { get; set; }
        public int CategoryId { get; set; }
        public string? Description { get; set; }
        public string? Beverage { get; set; }
        public string? Size { get; set; }
        public virtual SubCategoryDto? Category { get; set; }
        public List<OrderItemDto>? OrderItem { get; set; }
    }
}
