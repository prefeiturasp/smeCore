using smeCore.Models.Authentication;
using System.Threading.Tasks;

namespace smeCore.API.Service.Interface.AuthInterfaces
{
    public interface IAuthService
    {
        Task<ClientUser> Authenticate(Credential credential);
        Task<(string, string)> GetTokens(ClientUser user);
        Task<(string, string)> RefreshToken(Credential credential);
        Task<bool> LogoutIdentity(Credential credential);
        string CreateToken(ClientUser user);
        string CreateRefreshToken();
    }
}
