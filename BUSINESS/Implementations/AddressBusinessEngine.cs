using BUSINESS.Contracts;
using SHARED.DataContracts;
using SHARED.DbModels.AdressModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BUSINESS.Implementatıns
{
    public class AddressBusinessEngine : IAddressBusinessEngine
    {
        private readonly IUnitOfWork _uow;
        public AddressBusinessEngine(IUnitOfWork uow)
        {
            _uow = uow;
        }



        public List<CityDto> GetCities()
        {
            List<CityDto> cities = new List<CityDto>();

            var CityData = this._uow.cities.GetAll().ToList();
            if (CityData != null)
            {
                foreach (var d in CityData)
                {
                    cities.Add(new CityDto()

                    {
                        Id = d.Id,
                        CityName = d.CityName,
                    });
                }
            }
            return cities;

        }

        public List<DistrictDto> GetDistricts(int cityId)
        {

            List<DistrictDto> districts = new List<DistrictDto>();

            var DistrictData = this._uow.districts.GetAll(i => i.CityId == cityId).ToList();
            if (DistrictData != null)
            {
                foreach (var d in DistrictData)
                {
                    districts.Add(new DistrictDto()
                    {

                        Id = d.Id,
                        DistrictName = d.DistrictName

                    });
                }
            }
            return districts;
        }
    }
}
