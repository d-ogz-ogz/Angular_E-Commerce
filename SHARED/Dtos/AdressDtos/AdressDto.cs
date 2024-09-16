using SHARED.DbModels.CustomerModels;
using SHARED.UserDtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DbModels.AdressModels
{
    public class Address
    {

        public int Id { get; set; }
        public int CityId { get; set; }
        public int DistrictId { get; set; } //bire bir
        public virtual DistrictDto? District { get; set; }
    }


}

