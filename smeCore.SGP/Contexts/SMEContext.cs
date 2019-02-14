﻿using Microsoft.EntityFrameworkCore;

namespace smeCore.SGP.Contexts
{
    public class SMEContext : DbContext
    {
        #region ==================== ATTRIBUTES ====================

        #region -------------------- ACADEMIC --------------------

        public DbSet<smeCore.Models.Academic.AnnualPlan> AnnualPlans { get; set; }
        public DbSet<smeCore.Models.Academic.ClassAbsence> ClassAbsences { get; set; }
        public DbSet<smeCore.Models.Academic.ClassSchedule> ClassSchedules { get; set; }
        public DbSet<smeCore.Models.Academic.Cycle> Cycles { get; set; }
        public DbSet<smeCore.Models.Academic.Discipline> Disciplines { get; set; }
        public DbSet<smeCore.Models.Academic.Planning> Plannings { get; set; }
        public DbSet<smeCore.Models.Academic.Student> Students { get; set; }
        public DbSet<smeCore.Models.Academic.StudentClass> StudentClasses { get; set; }

        #endregion -------------------- ACADEMIC --------------------

        #region -------------------- AUTHENTICATION --------------------

        public DbSet<smeCore.Models.Authentication.LoggedUser> LoggedUsers { get; set; }
        public DbSet<smeCore.Models.Authentication.Role> Roles { get; set; }
        public DbSet<smeCore.Models.Authentication.User> Users { get; set; }
        public DbSet<smeCore.Models.Authentication.UserRole> UserRoles { get; set; }

        #endregion -------------------- AUTHENTICATION --------------------

        #region -------------------- ENTITY --------------------

        public DbSet<smeCore.Models.Entity.Profile> Profiles { get; set; }

        #endregion -------------------- ENTITY --------------------

        #region -------------------- ORGANIZATION --------------------

        public DbSet<smeCore.Models.Organization.Code> Codes { get; set; }
        public DbSet<smeCore.Models.Organization.UserCode> UserCodes { get; set; }

        #endregion -------------------- ORGANIZATION --------------------

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