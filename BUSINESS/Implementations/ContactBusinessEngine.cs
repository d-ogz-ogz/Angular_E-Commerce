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
    public class ContactBusinessEngine : IContactBusinessEngine
    {
        private readonly IUnitOfWork _uow;
        public ContactBusinessEngine(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public object GetContactInfo()
        {

            ContactDto contactInfo = new ContactDto();

            var data = this._uow.contactInfo.GetAll().FirstOrDefault();
            if (data != null)
            {


                contactInfo.ContactNumber = data.ContactNumber;
                contactInfo.CompanyName = data.CompanyName;
                contactInfo.Adress1 = data.Adress1;
                contactInfo.Adress2 = data.Adress2;
                contactInfo.Email = data.Email;



                   

            }
            return contactInfo;
        }








    }
}











//{
//    var data = _uow.order.GetAll(null, null, "Customer");
//    if (data != null)
//    {
//        List<GetOrderDto> returnModel = new List<GetOrderDto>();
//        foreach (var item in data)
//        {
//            returnModel.Add(new GetOrderDto()
//            {
//                GrandTotal = item.GrandTotal,
//                OrderId = item.OrderId,
//                OrderNo = item.OrderNo,
//                PaymentMethod = item.PaymentMethod,
//                CustomerName = item.Customer.Name
//            });
//        }
//        return new Result<List<GetOrderDto>>(true, ResultConstant.RecordFound, returnModel);
//    }
//    return new Result<List<GetOrderDto>>(false, ResultConstant.RecordNotFound);
//}
//////////////////CONTROLLER

////[HttpGet("GetOrders")]
////public List<GetOrderDto> GetOrders(id)
////{
////    var result = _orderBusinessEngine.GetOrders().Where(p=>p.id==id);
////    return result.Data;
////}

/////SERVICE


////GetOrderList() {
////    var data = this.http.get(environment.apiUrl + '/api/Order/GetOrders').toPromise();
////    console.log("Get ORder List data=>", data);
////    return data;
////}
