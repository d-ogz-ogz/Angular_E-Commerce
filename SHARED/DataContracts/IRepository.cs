using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SHARED.DataContracts
{
    public interface IRepository<T> where T : class, new()
    {
        IQueryable<T> GetAll(Expression<Func<T, bool>>? filter = null, Func<IQueryable<T>, Func<IOrderedQueryable>>? orderBy = null, string? includeProperties = "");
        T GetbyId(int id);
        void Add(T Entity);
        void Delete(T Entity);
        void Update(T Entity);

    }
}

