using Microsoft.Extensions.DependencyInjection;
using smeCore.API.Repository.Interface.Interfaces;
using smeCore.API.Repository.Repositories;
using smeCore.API.Service.Autenticacao;
using smeCore.API.Service.Interface.AuthInterfaces;
using smeCore.Models.Authentication;

namespace smeCore.API.IoC
{
    public static class DependencyInjector
    {
        public static void Register(IServiceCollection services)
        {
            RegisterServices(services);
            RegisterRepositories(services);
        }

        private static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IAuthService, AuthService>();
        }

        private static void RegisterRepositories(IServiceCollection services)
        {
            services.AddScoped<IAuthRepository<LoggedUser>, AuthRepository<LoggedUser>>();
        }
    }
}
