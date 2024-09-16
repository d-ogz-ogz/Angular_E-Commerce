using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DbModels.AdressModels
{
    public class DistrictDto
    {
     
        public int Id { get; set; }
        public string? DistrictName { get; set; }
        public int CityId { get; set; }
        public virtual CityDto? City { get; set; }



    }
}
