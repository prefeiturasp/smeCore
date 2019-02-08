using Microsoft.EntityFrameworkCore;

namespace smeCore.SGP.Contexts
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

        public DbSet<smeCore.Models.Planning.Cycle> Cycles { get; set; }

        public DbSet<smeCore.Models.Planning.Annual> Annuals { get; set; }

        public DbSet<smeCore.Models.Planning.Appointment> Appointments { get; set; }

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