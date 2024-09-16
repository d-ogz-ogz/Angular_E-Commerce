using SHARED.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BUSINESS.Implementatıns.ItemBusinessEngine;

namespace BUSINESS.Contracts
{
    public interface IItemBusinessEngine
    {

        public ItemResult GetItems(int selectedPage, int perPage, int? mainCatId = null,int ? categoryId = null);
        List<CategoryDto> GetCategories();
        List<SubCategoryDto> GetSubCategories(int id);
        public ItemDto GetFavouriteItem();
        public List<ItemDto> GetRandomItems();

    }
}
