using Microsoft.EntityFrameworkCore;

namespace smeCore.SGP.Contexts
{
    public class SMEContext : DbContext
    {
        #region ==================== ATTRIBUTES ====================

        #region -------------------- ACADEMIC --------------------

        public DbSet<smeCore.Models.Academic.AnnualPlan> AnnualPlans { get; set; }
        public DbSet<smeCore.Models.Academic.ClassAbsence> ClassAbsences { get; set; }
        public DbSet<smeCore.Models.Academic.ClassMode> ClassModes { get; set; }
        public DbSet<smeCore.Models.Academic.ClassModeCalendar> ClassModeCalendars { get; set; }
        public DbSet<smeCore.Models.Academic.ClassPoll> ClassPolls { get; set; }
        public DbSet<smeCore.Models.Academic.ClassSchedule> ClassSchedules { get; set; }
        public DbSet<smeCore.Models.Academic.Cycle> Cycles { get; set; }
        public DbSet<smeCore.Models.Academic.Discipline> Disciplines { get; set; }
        public DbSet<smeCore.Models.Academic.Planning> Plannings { get; set; }
        public DbSet<smeCore.Models.Academic.PollPortuguese> PollPortugueses { get; set; }
        public DbSet<smeCore.Models.Academic.RegionalBoardEducation> RegionalBoardEducations { get; set; }
        public DbSet<smeCore.Models.Academic.School> Schools { get; set; }
        public DbSet<smeCore.Models.Academic.SchoolCalendar> SchoolCalendars { get; set; }
        public DbSet<smeCore.Models.Academic.SchoolClass> SchoolClasses { get; set; }
        public DbSet<smeCore.Models.Academic.SchoolYear> SchoolYears { get; set; }
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
        public DbSet<smeCore.Models.Organization.StudentCode> StudentCodes { get; set; }
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

        #region ==================== METHODS ====================

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            smeCore.Models.Academic.SchoolYear schoolYear = new smeCore.Models.Academic.SchoolYear()
            {
                Year = 2019,
                Name = "Ensino Regular"
            };
            schoolYear.NewID();
            modelBuilder.Entity<smeCore.Models.Academic.SchoolYear>().HasData(schoolYear);

            smeCore.Models.Academic.SchoolTerm bimester = new smeCore.Models.Academic.SchoolTerm();
            bimester.NewID();
            modelBuilder.Entity<smeCore.Models.Academic.SchoolTerm>().HasData(new
            {
                bimester.Id,
                Name = "1° Bimestre de 2019",
                ValidityStart = new System.DateTime(2019, 2, 4),
                ValidityEnd = new System.DateTime(2019, 4, 30),
                ClosureStart = new System.DateTime(2019, 4, 15),
                ClosureEnd = new System.DateTime(2019, 5, 18),
                ReportCardConsolidation = new System.DateTime(2019, 5, 19),
                SchoolYearId = schoolYear.Id,
            });

            bimester.NewID();
            modelBuilder.Entity<smeCore.Models.Academic.SchoolTerm>().HasData(new
            {
                bimester.Id,
                Name = "2° Bimestre de 2019",
                ValidityStart = new System.DateTime(2019, 5, 2),
                ValidityEnd = new System.DateTime(2019, 7, 5),
                ClosureStart = new System.DateTime(2019, 6, 24),
                ClosureEnd = new System.DateTime(2019, 7, 27),
                ReportCardConsolidation = new System.DateTime(2019, 7, 28),
                SchoolYearId = schoolYear.Id,
            });

            bimester.NewID();
            modelBuilder.Entity<smeCore.Models.Academic.SchoolTerm>().HasData(new
            {
                bimester.Id,
                Name = "3° Bimestre de 2019",
                ValidityStart = new System.DateTime(2019, 7, 22),
                ValidityEnd = new System.DateTime(2019, 9, 30),
                ClosureStart = new System.DateTime(2019, 9, 16),
                ClosureEnd = new System.DateTime(2019, 10, 12),
                ReportCardConsolidation = new System.DateTime(2019, 10, 13),
                SchoolYearId = schoolYear.Id,
            });

            bimester.NewID();
            modelBuilder.Entity<smeCore.Models.Academic.SchoolTerm>().HasData(new
            {
                bimester.Id,
                Name = "4° Bimestre de 2019",
                ValidityStart = new System.DateTime(2019, 10, 1),
                ValidityEnd = new System.DateTime(2019, 12, 20),
                ClosureStart = new System.DateTime(2019, 12, 1),
                ClosureEnd = new System.DateTime(2019, 12, 21),
                ReportCardConsolidation = new System.DateTime(2019, 12, 22),
                SchoolYearId = schoolYear.Id,
            });
        }

        #endregion ==================== METHODS ====================
    }
}