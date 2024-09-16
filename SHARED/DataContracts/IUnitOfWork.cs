using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DataContracts
{
    public interface IUnitOfWork:IDisposable
    {
        IItemRepository items { get; }
        IOrderRepository orders { get; }
        ICategoryRepository categories { get; }
        IAddressRepository address { get; }
        IOrderItemRepository orderItems { get; }
        IContactRepository contactInfo { get; }
        ISubCategoryRepository subCategories { get; }
        ICommentRepository comments { get; }
        IAuthRepository users { get; }
        ICityRepository cities { get; }
        IDistrictRepository districts { get; }

        public void Save();
    }
}
