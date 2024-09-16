using SHARED.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BUSINESS.Implementatıns.ItemBusinessEngine;

namespace BUSINESS.Contracts
{
    public interface IContactBusinessEngine
    {
        public object GetContactInfo();

    }
}
