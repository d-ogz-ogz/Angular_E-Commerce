using SHARED.DbModels.OrderModels;
using SHARED.Dtos;
using SHARED.Dtos.OrderDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BUSINESS.Implementatıns.OrderBusinessEngine;

namespace BUSINESS.Contracts
{
    public interface IOrderBusinessEngine {
        List<GetOrderDto> GetOrders();
        OrderSubDto SaveOrder(OrderDto order);
        void DeleteOrder(int orderId);
    }
}
