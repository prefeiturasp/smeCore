using Microsoft.Extensions.DependencyInjection;
using smeCore.API.Repository.Interface.Interfaces;
using smeCore.API.Repository.Repositories;
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
            services.AddScoped<IAuthServiceToRepository, AuthServiceToRepository>();
        }

        private static void RegisterRepositories(IServiceCollection services)
        {
            services.AddScoped<IAuthRepository, AuthRepository>();
        }
    }
}
