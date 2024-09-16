using BUSINESS.Contracts;
using SHARED.DataContracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



    public class CustomerBusinessEngine:ICustomerBusinessEngine
    {
        private readonly IUnitOfWork _uow;
        public CustomerBusinessEngine(IUnitOfWork uow)
        {
            _uow = uow;
        }

    }

