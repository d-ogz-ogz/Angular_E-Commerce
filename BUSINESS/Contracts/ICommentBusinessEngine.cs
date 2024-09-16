using SHARED.Dtos;
using SHARED.Dtos.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BUSINESS.Contracts
{
    public interface ICommentBusinessEngine
    {
        public CommentDto SendComment(CommentDto comment);
        public List<CommentDto> GetUserComments(int userId);
    }
}
