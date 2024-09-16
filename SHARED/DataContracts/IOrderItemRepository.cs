using SHARED.Models.OrderModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DataContracts
{
    public interface IOrderItemRepository:IRepository<OrderItemDto>
    {
    }
}
