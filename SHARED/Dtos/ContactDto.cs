using SHARED.Models.OrderModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.Dtos
{
    public class ContactDto
    {
        public int Id { get; set; }
        public string? CompanyName { get; set; }
        public string? ContactNumber { get; set; }
        public string? Email { get; set; }
        public string? Adress1 { get; set; }
        public string? Adress2 { get; set; }
    }
}
