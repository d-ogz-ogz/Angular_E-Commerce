using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.Dtos.OrderDtos
{
    public class GetOrderDto
    {
        public int Id { get; set; }
        public int? OrderId { get; set; }
        public int OrderNo { get; set; }
        public decimal? GrandTotal { get; set; }
        public string? PaymentMethod { get; set; }
        public string? ShippingAdress { get; set; }
        public string? ReceiverName { get; set; }
        public int? CustomerId { get; set; }
        public string? CustomerName { get; set; }
    }
}

