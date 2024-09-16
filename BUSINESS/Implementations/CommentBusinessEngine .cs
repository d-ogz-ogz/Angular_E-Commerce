using BUSINESS.Contracts;
using SHARED.DataContracts;
using SHARED.Dtos;
using SHARED.Dtos.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BUSINESS.Implementatıns
{
    public class CommentBusinessEngine : ICommentBusinessEngine
    {
        private readonly IUnitOfWork _uow;
        public CommentBusinessEngine(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public List<CommentDto> GetUserComments(int userId)
        {
            List<CommentDto> commentList = new List<CommentDto>();

            var data = _uow.comments.GetAll(i => i.Id == userId).ToList();

            if (userId != 0)
            {
                foreach (var com in data)
                {
                    commentList.Add(new CommentDto()
                    {
                        Id = com.Id,
                        Email = com.Email,
                        SenderName = com.SenderName,
                        Content = com.Content,
                        ContentHeader = com.ContentHeader,
                        User = _uow.users.GetbyId(userId)


                    }); ;
                }
            }
            return commentList;
        }

        public CommentDto SendComment(CommentDto comment)
        {
            try
            {
                CommentDto commentModel = new CommentDto();
                comment.Content = commentModel.Content;
                comment.ContentHeader = commentModel.ContentHeader;
                comment.Email = commentModel.Email;
                comment.SenderName = commentModel.SenderName;
                _uow.comments.Add(comment);
                _uow.Save();




            }
            catch (Exception)
            {

                throw;
            }
            return comment;
        }
    }

}

