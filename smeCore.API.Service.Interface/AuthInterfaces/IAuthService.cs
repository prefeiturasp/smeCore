using smeCore.Models.Authentication;
using System.Threading.Tasks;

namespace smeCore.API.Service.Interface.AuthInterfaces
{
    public interface IAuthService
    {
        Task<ClientUser> Authenticate(Credential credential);
        Task<(string newtoken, string newRefreshToken)> GetTokens(ClientUser user);
        Task<(string newtoken, string newRefreshToken)> RefreshToken(Credential credential);
        Task<bool> LogoutIdentity(Credential credential);
    }
}
