using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;
using SHARED.DbModels.OrderModels;
using SHARED.Dtos.OrderDtos;
using Newtonsoft.Json;
using static BUSINESS.Implementatıns.OrderBusinessEngine;

namespace UI.Controllers
{
    [Route("Order")]
    public class OrderController : ControllerBase { 



        private readonly IOrderBusinessEngine _orderEngine;
        public OrderController(IOrderBusinessEngine orderEngine)
        {
            _orderEngine = orderEngine;
        }
        [HttpGet("GetOrders")]
        public List<GetOrderDto> GetOrder()
        {
            return this._orderEngine.GetOrders();
        }
        [HttpPost("SaveOrder")]
        public object SaveOrder([FromBody] OrderDto order)
        {

            var orderInfo = this._orderEngine.SaveOrder(order);
            return JsonConvert.SerializeObject(orderInfo);
        }
        [HttpPost("DeleteOrder/{id}")]
        public void DeleteOrder(int id)
        {
            this._orderEngine.DeleteOrder(id);

        }

    }
}
