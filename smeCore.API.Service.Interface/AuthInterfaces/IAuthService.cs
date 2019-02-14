using smeCore.Models.Authentication;
using System.Threading.Tasks;

namespace smeCore.API.Service.Interface.AuthInterfaces
{
    public interface IAuthService
    {
        Task<ClientUser> Authenticate(Credential credential);
        Task<(string, string)> RefreshToken(Credential credential);
        string CreateToken(ClientUser user);
        string CreateRefreshToken();
    }
}
