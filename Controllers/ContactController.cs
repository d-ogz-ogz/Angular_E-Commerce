using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SHARED.Dtos;
using static BUSINESS.Implementatıns.ItemBusinessEngine;

namespace UI.Controllers
{
    [Route("Contact")]
    public class ContactController : ControllerBase
    {
        private readonly IContactBusinessEngine _contactEngine;
        public ContactController(IContactBusinessEngine contactEngine)
        {
            _contactEngine = contactEngine;
        }
        [HttpGet("GetContactInfo")]
        public object GetContactInfo()
        {
            var result= this._contactEngine.GetContactInfo();
            return JsonConvert.SerializeObject(result);

        }
    }
}

