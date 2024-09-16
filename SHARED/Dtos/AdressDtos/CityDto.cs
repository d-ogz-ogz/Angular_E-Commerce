using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DbModels.AdressModels
{
    public class CityDto
    {
        
        public int Id { get; set; }
        public string? CityName { get; set; }
        public virtual ICollection<DistrictDto>? District { get; set; }

    }
}
