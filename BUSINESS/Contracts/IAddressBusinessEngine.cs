using SHARED.DbModels.AdressModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BUSINESS.Contracts
{
    public interface IAddressBusinessEngine
    {
        public List<CityDto> GetCities();
        public List<DistrictDto> GetDistricts(int cityId);
    }
}
