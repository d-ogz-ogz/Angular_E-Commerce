using SHARED.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.Dtos.UserDtos
{
    public class CommentDto
    {
        public int Id { get; set; }
        public string? Content { get; set; }
        public string? ContentHeader { get; set; }
        public string? SenderName { get; set; }
        public string? Email { get; set; }
        public virtual UserDto? User { get; set; }
       


    }
}
