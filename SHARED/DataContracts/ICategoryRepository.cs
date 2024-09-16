using SHARED.DbModels;
using SHARED.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DataContracts
{
    public interface ICategoryRepository:IRepository<CategoryDto>
    {
    }
}
