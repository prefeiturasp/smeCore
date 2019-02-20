using smeCore.API.Repository.Interface.APIContexts;
using smeCore.Models.Base.Abstracts;
using System.Threading.Tasks;

namespace smeCore.API.Repository
{
    public class CRUDRepository<T> where T: Table
    {
        public async Task<bool> AddAsync(T entity, SMEAPIContext _db)
        {
            await _db.AddAsync<T>(entity);
            return await SaveAsync(_db);
        }

        public async Task<bool> DeleteAsync(T entity, SMEAPIContext _db)
        {
            _db.Remove<T>(entity);
            return await SaveAsync(_db);
        }

        public async Task<bool> SaveAsync(SMEAPIContext _db)
        {
            return await _db.SaveChangesAsync() > 0;
        }

        public async Task<bool> UpdateAsync(T entity, SMEAPIContext _db)
        {
            _db.Update<T>(entity);
            return await SaveAsync(_db);
        }
    }
}
