using smeCore.Models.Base.Abstracts;
using System.Threading.Tasks;

namespace smeCore.API.Repository.Interface.Interfaces
{
    public interface IAuthRepository<T> where T: Table
    {
        Task SaveAsync();
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
    }
}
