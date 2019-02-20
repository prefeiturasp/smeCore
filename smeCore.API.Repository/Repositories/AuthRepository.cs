using smeCore.API.Repository.Interface.APIContexts;
using smeCore.API.Repository.Interface.Interfaces;
using smeCore.Models.Base.Abstracts;

namespace smeCore.API.Repository.Repositories
{
    public class AuthRepository<T> : CRUDRepository<T>, IAuthRepository where T: Table
    {
        private readonly SMEAPIContext _db;

        public AuthRepository(SMEAPIContext db)
        {
            _db = db;
        }
    }
}
