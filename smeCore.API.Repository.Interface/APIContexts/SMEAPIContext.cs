using Microsoft.EntityFrameworkCore;
using smeCore.Models.Authentication;

namespace smeCore.API.Repository.Interface.APIContexts
{
    public class SMEAPIContext : DbContext
    {
        #region ==================== ATTRIBUTES ====================

        /// <summary>
        /// DbSet para mapear os usuários logados no sistema.
        /// </summary>
        public DbSet<LoggedUser> LoggedUsers { get; set; }

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== CONSTRUCTORS ====================

        /// <summary>
        /// Construtor padrão do SMEContext
        /// </summary>
        /// <param name="options">Dependência de configuração/inicialização do SMECore</param>
        public SMEAPIContext(DbContextOptions<SMEAPIContext> options)
            : base(options)
        { }

        #endregion ==================== CONSTRUCTORS ====================
    }
}
