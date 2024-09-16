using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;
using SHARED.DataContracts;
using SHARED.DbModels.AdressModels;
using SHARED.DbModels.OrderModels;
using SHARED.Dtos;
using SHARED.Dtos.OrderDtos;
using SHARED.Models.OrderModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BUSINESS.Implementatıns
{
    public class OrderBusinessEngine : IOrderBusinessEngine
    {
        private readonly IUnitOfWork _uow;
        public OrderBusinessEngine(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public void DeleteOrder(int orderId)
        {
            if (orderId! < 0)
            {
                var deleteItem = _uow.orders.GetbyId(orderId);
                deleteItem.IsRemoved = true;
                _uow.Save();
            
            }


        }

        public List<GetOrderDto> GetOrders()
        {
            List<GetOrderDto> getOrderList = new List<GetOrderDto>();
            var data = _uow.orders.GetAll(null, null, "Customer").Where(o => !o.IsRemoved);

            if (data != null)
            {
                foreach (var order in data)
                {
                    var orderModel = new GetOrderDto()
                    {

                        CustomerId = Convert.ToInt32(order.User.Id),
                        CustomerName = order.User.UserName,
                        ShippingAdress = order.OrderDetails.ShippingAddress,
                        PaymentMethod = order.User.PaymentDetails.PaymentMethod,
                        ReceiverName = order.OrderDetails.ReceiverName,
                        GrandTotal = order.OrderDetails.GrandTotal,


                    };
                    getOrderList.Add(orderModel);
                    //SaveOrder();

                    //aaa.Id;
                    ////

                }
            }
            return getOrderList;
        }

        public OrderSubDto SaveOrder(OrderDto order)
        {
            try
            {
                OrderSubDto? orderSubModel = new();
                orderSubModel.OrderNo = Guid.NewGuid().ToString();
                orderSubModel.ReceiverName = order.OrderDetails?.ReceiverName;
                orderSubModel.ContactNumber = order.OrderDetails?.ContactNumber;
                orderSubModel.ShippingAddress = order.OrderDetails?.ShippingAddress;
                orderSubModel.SameAddress = order.OrderDetails.SameAddress;
                orderSubModel.SaveInfo = order.OrderDetails.SaveInfo;
                orderSubModel.City = order.OrderDetails.City;
                orderSubModel.District = order.OrderDetails.District;
                orderSubModel.OrderDate = DateTime.Now;



                if (order.OrderItem.Count != 0)
                {
                    foreach (var item in order.OrderItem)
                    {
                        OrderItemDto oItemModel = new OrderItemDto();
                        oItemModel.ItemId = Convert.ToInt32(item.Id);
                        oItemModel.Quantity = item.Quantity;
                        oItemModel.ItemName = item.ItemName;
                        oItemModel.Price = item.Price;
                        oItemModel.Beverage = item.Beverage;
                        oItemModel.Size = item.Size;



                        _uow.orderItems.Add(item);

                    }
                }
                OrderDto? orderModel = new();
                orderModel.OrderDetails = orderSubModel;

                _uow.orders.Add(orderModel);


                _uow.Save();

                return orderSubModel;
            }

            catch (Exception)
            {

                throw;
            }






        }

        public class OrderInfo
        {
            public OrderDto? Order;
            public string OrderNo = "";
        }


    }
}





