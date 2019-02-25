using System.Threading.Tasks;
using smeCore.API.Repository.Interface.APIContexts;
using smeCore.API.Repository.Interface.Interfaces;
using smeCore.Models.Base.Abstracts;

namespace smeCore.API.Repository.Repositories
{
    public class AuthRepository<T> : CRUDRepository<T>, IAuthRepository<T> where T: Table
    {
        private readonly SMEAPIContext _db;

        public AuthRepository(SMEAPIContext db)
        {
            _db = db;
        }

        public async Task AddAsync(T entity)
        {
            await AddAsync(entity, _db);
        }

        public async Task DeleteAsync(T entity)
        {
            await DeleteAsync(entity, _db);
        }

        public async Task SaveAsync()
        {
            await SaveAsync(_db);
        }

        public async Task UpdateAsync(T entity)
        {
            await UpdateAsync(entity, _db);
        }
    }
}
