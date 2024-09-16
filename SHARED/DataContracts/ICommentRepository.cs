using SHARED.DbModels;
using SHARED.Dtos;
using SHARED.Dtos.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DataContracts
{
    public interface ICommentRepository:IRepository<CommentDto>
    {
    }
}
