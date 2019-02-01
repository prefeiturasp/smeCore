using Microsoft.EntityFrameworkCore;

namespace smeCore.API.Contexts
{
    /// <summary>
    /// DataBase Context do smeCore.
    /// </summary>
    public class SMEContext : DbContext
    {
        #region ==================== ATTRIBUTES ====================

        /// <summary>
        /// DbSet para mapear os usuários logados no sistema.
        /// </summary>
        public DbSet<smeCore.Models.Authentication.LoggedUser> LoggedUsers { get; set; }

        #endregion ==================== ATTRIBUTES ====================

        #region ==================== CONSTRUCTORS ====================

        /// <summary>
        /// Construtor padrão do SMEContext
        /// </summary>
        /// <param name="options">Dependência de configuração/inicialização do SMECore</param>
        public SMEContext(DbContextOptions<SMEContext> options)
            : base(options)
        { }

        #endregion ==================== CONSTRUCTORS ====================
    }
}