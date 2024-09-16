using BUSINESS.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace UI.Controllers
{
    [Route("Customer")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerBusinessEngine _customerEngine;
        public CustomerController(ICustomerBusinessEngine customerEngine)
        {
            _customerEngine = customerEngine;
        }
   
    }
}
