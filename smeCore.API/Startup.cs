using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using smeCore.API.IoC;
using smeCore.API.Repository.Interface.APIContexts;
using smeCore.API.Service.Interface.Settings;
using System;
using System.IO;
using System.Reflection;
using System.Text;

namespace smeCore.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            DependencyInjector.Register(services);

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // Configuração de injeção de dependência do SMEContext (Postgres - Npgsql)
            services.AddDbContext<SMEAPIContext>(options =>
                options.UseNpgsql(
                    Configuration.GetConnectionString("DefaultConnection")));

            // JWT
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = Configuration["JwtSettings:Issuer"],
                        ValidAudience = Configuration["JwtSettings:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtSettings:Key"]))
                    };
                });

            // CORS (Cross-Origin Requests)
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin() // Ulilizar a função abaixo e comentar essa para definir permissão de acesso de determinadas origens, caso contrário será aceito qualquer origem da requisição
                                          //.WithOrigins("https://mydomain.com", "http://outroendereco.com.br")
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .Build());
            });

            #region ----------------------- CONFIGURAÇÕES SERVIÇOS ----------------------------------------------------

            services.Configure<ApiURLSettings>(Configuration
                .GetSection(nameof(ApiURLSettings)));

            services.Configure<APISettings>(Configuration
                .GetSection(nameof(APISettings)));

            #endregion

            // Registra o Swagger Generator (OpenAPI)
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("documentation", new Swashbuckle.AspNetCore.Swagger.Info()
                {
                    Title = "smeCore.API",
                    Version = "v1.0.0",
                    Description = "Documentação das APIs do smeCore.API (.NET Core v2.2)",
                });

                string xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                options.IncludeXmlComments(xmlPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedFor | Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedProto
            });
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseCors("CorsPolicy");
            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/documentation/swagger.json", "smeCore.API");
                options.RoutePrefix = string.Empty;
            });
            app.UseMvc();
        }
    }
}