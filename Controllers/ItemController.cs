using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SHARED.Dtos;
using static BUSINESS.Implementatıns.ItemBusinessEngine;

namespace UI.Controllers
{
    [Route("Item")]
    public class ItemController : ControllerBase
    {
        private readonly IItemBusinessEngine _itemEngine;
        public ItemController(IItemBusinessEngine itemEngine)
        {
            _itemEngine = itemEngine;
        }
        [HttpGet("GetItems")]
        public string GetItems(int selectedPage, int perPage, int? mainCatId = null,int ? categoryId = null)
        {
            var r = new
            {
                ItemList = this._itemEngine.GetItems(selectedPage, perPage, mainCatId,categoryId ).ItemList.Select(a => new { id = a.Id, name = a.Name, price = a.Price,description=a.Description,beverage=a.Beverage,size=a.Size }),
                PageCount = this._itemEngine.GetItems(selectedPage, perPage, mainCatId,categoryId).PageCount
            };

            return JsonConvert.SerializeObject(r);
       
        }
        [HttpGet("GetCategories")]
        public List<CategoryDto> GetCategories()
        {
            return this._itemEngine.GetCategories();
        }

        [HttpGet("GetSubCategories/{id}")]
        public List<SubCategoryDto> GetSubCategories(int id)
        {
            return this._itemEngine.GetSubCategories(id);
        }
        [HttpGet("GetFavouriteItem")]
        public ItemDto GetFavouriteItem()
        {
            return this._itemEngine.GetFavouriteItem();
        }
        [HttpGet("GetRandomItems")]
        public List<ItemDto> GetRandomItems()
        {
            return this._itemEngine.GetRandomItems();
        }


    }
}
