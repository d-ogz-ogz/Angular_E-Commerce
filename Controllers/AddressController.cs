
using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;
using SHARED.DbModels.AdressModels;

namespace UI.Controllers
{

    [Route("Address")]
    public class AddressController : ControllerBase
    {
        private readonly IAddressBusinessEngine _addressEngine;

        public AddressController(IAddressBusinessEngine addressEngine)
        {
            _addressEngine = addressEngine;
        }
        [HttpGet("GetCities")]
        public List<CityDto> GetCities()
        {
            //return new List<CityDto>() { new CityDto { CityName = "Ankara", Id = 1 }, new CityDto { CityName = "İstanbul", Id = 2 } };
            var r = this._addressEngine.GetCities();
            return r;


        }
        [HttpGet("GetDistricts")]
        public List<DistrictDto> GetDistricts(int cityId)
        {
            //var result=  new List<DistrictDto>() { new DistrictDto { CityId = 1, DistrictName = "Çankaya", Id = 1 }, new DistrictDto { CityId = 1, DistrictName = "YeniMahalle", Id = 2 }, new DistrictDto { CityId = 2, DistrictName = "Ümraniye", Id = 3 }, new DistrictDto { CityId = 2, DistrictName = "Kadıköy", Id = 4 } };
            // return result.Where(r => r.CityId == cityId).ToList();
            var r = this._addressEngine.GetDistricts(cityId);
            return r;

        }

    }
}


