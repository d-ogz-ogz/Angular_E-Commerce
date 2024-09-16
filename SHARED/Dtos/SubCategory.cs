using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.Dtos
{
    public class SubCategoryDto
    {
        public int Id { get; set; }
        public string? Name  { get; set; }
        public int CategoryId { get; set; }
        public List<ItemDto>? Items { get; set; }
        public virtual CategoryDto? Category { get; set; }

    }
}
