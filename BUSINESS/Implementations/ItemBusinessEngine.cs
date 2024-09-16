using BUSINESS.Contracts;
using SHARED.DataContracts;
using SHARED.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BUSINESS.Implementatıns
{
    public class ItemBusinessEngine : IItemBusinessEngine
    {
        private readonly IUnitOfWork _uow;
        public ItemBusinessEngine(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public List<CategoryDto> GetCategories()
        {
            List<CategoryDto> categories = new List<CategoryDto>();
            var Categorydata = this._uow.categories.GetAll().ToList();
            if (Categorydata != null)
            {
                foreach (var cat in Categorydata)
                {
                    categories.Add(new CategoryDto()
                    {
                        Id = cat.Id,
                        CategoryName = cat.CategoryName
                    });
                }
            }
            return categories;
        }

        public List<SubCategoryDto> GetSubCategories(int id)
        {
            List<SubCategoryDto> subCategories = new List<SubCategoryDto>();
            var subCategoryData = this._uow.subCategories.GetAll(i => i.CategoryId == id).ToList();
            if (subCategoryData != null)
            {
                foreach (var scat in subCategoryData)
                {
                    subCategories.Add(new SubCategoryDto()
                    {
                        Id = scat.Id,
                        Name = scat.Name,

                    }); ;
                }
            }
            return subCategories;
        }

        public ItemDto GetFavouriteItem()
        {
            var highPrices = this._uow.items.GetAll(i => i.Price <= 50).ToList();
            var random = new Random();
            int number = random.Next(highPrices.Count - 1);
            return highPrices[number];
        }
        public List<ItemDto> GetRandomItems()
        {
            List<ItemDto> randomItems = new List<ItemDto>();

            var itemData = this._uow.items.GetAll().ToList();
            var random = new Random();

            for (int i = 0; i < 8; i++)
            {
                int number = random.Next(itemData.Count - 1);
                var product = itemData[number];
                if (randomItems.Contains(product))
                {
                    itemData[i] = product;
                    i++;
               
                }
                randomItems.Add(new ItemDto()
                {

                    Id = product.Id,
                    Name = product.Name,
                    Price = product.Price,
                    Description = product.Description,

                });
            }
            return randomItems;
        }
        public ItemResult GetItems(int selectedPage, int perPage, int? mainCatId = null, int? categoryId = null)
        {

            List<ItemDto> items = new List<ItemDto>();
            var index = (selectedPage - 1) * perPage;
            var Itemdata = this._uow.items.GetAll(i => mainCatId == 0 || i.Category.CategoryId == mainCatId).Skip(index).Take(perPage).ToList();
            {
             Itemdata = Itemdata.FindAll(i => categoryId == null || i.CategoryId == categoryId).ToList();
            }
            
            if (Itemdata != null)
            {
                foreach (var item in Itemdata)
                {
                    items.Add(new ItemDto()
                    {
                        Id = item.Id,
                        Name = item.Name,
                        Price = item.Price,
                        CategoryId = item.CategoryId,
                        Category = this._uow.subCategories.GetbyId(item.Id),
                        Description = item.Description,
                        Beverage=item.Beverage,
                        Size=item.Size
                       

                    }); ;
                }
            }
            return new ItemResult { ItemList = items, PageCount = 36 / perPage };
        }
        public class ItemResult{
           public List<ItemDto>? ItemList;
           public int? PageCount;

}



}

}


//public ItemResult GetItems(int selectedPage, int perPage, int? categoryId = null, int? mainCatId = null);
//{

//    List<ItemDto> items = new List<ItemDto>();
//    var index = (selectedPage - 1) * perPage;

//    var Itemdata = this._uow.items.GetAll(i => categoryId == null || i.CategoryId == categoryId).Skip(index).Take(perPage).ToList();
//    if (Itemdata != null)
//    {
//        foreach (var item in Itemdata)
//        {
//            items.Add(new ItemDto()
//            {
//                Id = item.Id,
//                Name = item.Name,
//                Price = item.Price,
//                CategoryId = item.CategoryId,
//                Category = this._uow.subCategories.GetbyId(item.Id)


//            }); ;
//        }
//    }
//    return new ItemResult { ItemList = items, PageCount = 30 / perPage };
//}
