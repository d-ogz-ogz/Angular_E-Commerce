using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;
using SHARED.Dtos.UserDtos;

namespace UI.Controllers
{
    [Route("Comment")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentBusinessEngine _commentEngine;
        public CommentController(ICommentBusinessEngine commentEngine)
        {
            _commentEngine = commentEngine;
        }
        [HttpGet("GetComments")]
        public List<CommentDto> GetOrder(int userId)
        {
            return this._commentEngine.GetUserComments(userId);
        }
        [HttpPost("SaveUserComment")]
        public CommentDto SaveComment([FromBody] CommentDto comment)
        {
            this._commentEngine.SendComment(comment);
            return comment;

        }
    }

    }
    




  
    
    


