using Microsoft.Extensions.DependencyInjection;
using smeCore.API.Service.Autenticacao;
using smeCore.API.Service.Interface.AuthInterfaces;

namespace smeCore.API.IoC
{
    public static class DependencyInjector
    {
        public static void Register(IServiceCollection services)
        {
            RegisterServices(services);
        }

        private static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IAuthService, AuthService>();
        }
    }
}
