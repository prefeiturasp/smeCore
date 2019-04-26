using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace smeCore.SGP.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccessPermission",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccessPermission", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClassModes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Acronym = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassModes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Codes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Codes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cycles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    School = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    SelectedKnowledgeMatrix = table.Column<string>(nullable: true),
                    SelectedODS = table.Column<string>(nullable: true),
                    ModifiedBy = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cycles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Disciplines",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Disciplines", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LoggedUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    RefreshToken = table.Column<string>(nullable: true),
                    LastLogin = table.Column<DateTime>(nullable: false),
                    ExpiresAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoggedUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PollPortugueses",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    T1E = table.Column<string>(nullable: true),
                    T1L = table.Column<string>(nullable: true),
                    T2E = table.Column<string>(nullable: true),
                    T2L = table.Column<string>(nullable: true),
                    T3E = table.Column<string>(nullable: true),
                    T3L = table.Column<string>(nullable: true),
                    T4E = table.Column<string>(nullable: true),
                    T4L = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PollPortugueses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RegionalBoardEducations",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Acronym = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegionalBoardEducations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SchoolYears",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchoolYears", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClassPolls",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    PollPortugueseId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassPolls", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassPolls_PollPortugueses_PollPortugueseId",
                        column: x => x.PollPortugueseId,
                        principalTable: "PollPortugueses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Schools",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    SchoolType = table.Column<int>(nullable: false),
                    RegionalBoardEducationId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schools", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Schools_RegionalBoardEducations_RegionalBoardEducationId",
                        column: x => x.RegionalBoardEducationId,
                        principalTable: "RegionalBoardEducations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AccessPermissionRole",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    AccessPermissionId = table.Column<string>(nullable: true),
                    RoleId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccessPermissionRole", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccessPermissionRole_AccessPermission_AccessPermissionId",
                        column: x => x.AccessPermissionId,
                        principalTable: "AccessPermission",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AccessPermissionRole_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ClassModeCalendars",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ClassModeId = table.Column<string>(nullable: true),
                    SchoolYearId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassModeCalendars", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassModeCalendars_ClassModes_ClassModeId",
                        column: x => x.ClassModeId,
                        principalTable: "ClassModes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ClassModeCalendars_SchoolYears_SchoolYearId",
                        column: x => x.SchoolYearId,
                        principalTable: "SchoolYears",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SchoolTerms",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    ValidityStart = table.Column<DateTime>(nullable: false),
                    ValidityEnd = table.Column<DateTime>(nullable: false),
                    ClosureStart = table.Column<DateTime>(nullable: false),
                    ClosureEnd = table.Column<DateTime>(nullable: false),
                    ReportCardConsolidation = table.Column<DateTime>(nullable: false),
                    SchoolYearId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchoolTerms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SchoolTerms_SchoolYears_SchoolYearId",
                        column: x => x.SchoolYearId,
                        principalTable: "SchoolYears",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Profiles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Profiles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserCodes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true),
                    CodeId = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCodes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserCodes_Codes_CodeId",
                        column: x => x.CodeId,
                        principalTable: "Codes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserCodes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SchoolCalendars",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    SchoolId = table.Column<string>(nullable: true),
                    SchoolYearId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchoolCalendars", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SchoolCalendars_Schools_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "Schools",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SchoolCalendars_SchoolYears_SchoolYearId",
                        column: x => x.SchoolYearId,
                        principalTable: "SchoolYears",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SchoolClasses",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    OfferedSeats = table.Column<int>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    Classroom = table.Column<string>(nullable: true),
                    ClassModeId = table.Column<string>(nullable: true),
                    SchoolId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchoolClasses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SchoolClasses_ClassModes_ClassModeId",
                        column: x => x.ClassModeId,
                        principalTable: "ClassModes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SchoolClasses_Schools_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "Schools",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProfileId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Students_Profiles_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "Profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Plannings",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    Classroom = table.Column<string>(nullable: true),
                    School = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    DisciplineId = table.Column<string>(nullable: true),
                    SchoolClassId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plannings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Plannings_Disciplines_DisciplineId",
                        column: x => x.DisciplineId,
                        principalTable: "Disciplines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Plannings_SchoolClasses_SchoolClassId",
                        column: x => x.SchoolClassId,
                        principalTable: "SchoolClasses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "StudentCodes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true),
                    Validity = table.Column<DateTime>(nullable: false),
                    CodeId = table.Column<string>(nullable: true),
                    StudentId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentCodes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudentCodes_Codes_CodeId",
                        column: x => x.CodeId,
                        principalTable: "Codes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_StudentCodes_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AnnualPlans",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    SelectedLearningObjectivesB1 = table.Column<string>(nullable: true),
                    SelectedLearningObjectivesB2 = table.Column<string>(nullable: true),
                    SelectedLearningObjectivesB3 = table.Column<string>(nullable: true),
                    SelectedLearningObjectivesB4 = table.Column<string>(nullable: true),
                    DescriptionB1 = table.Column<string>(nullable: true),
                    DescriptionB2 = table.Column<string>(nullable: true),
                    DescriptionB3 = table.Column<string>(nullable: true),
                    DescriptionB4 = table.Column<string>(nullable: true),
                    PlanningId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnnualPlans", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnnualPlans_Plannings_PlanningId",
                        column: x => x.PlanningId,
                        principalTable: "Plannings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ClassSchedules",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    TagColor = table.Column<string>(nullable: true),
                    LearninObjectives = table.Column<string>(nullable: true),
                    ClassroomDevelopment = table.Column<string>(nullable: true),
                    ContinuousRecovery = table.Column<string>(nullable: true),
                    Homework = table.Column<string>(nullable: true),
                    Quantity = table.Column<int>(nullable: false),
                    PlanningId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassSchedules", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassSchedules_Plannings_PlanningId",
                        column: x => x.PlanningId,
                        principalTable: "Plannings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "StudentClasses",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    StudentId = table.Column<string>(nullable: true),
                    PlanningId = table.Column<string>(nullable: true),
                    SchoolClassId = table.Column<string>(nullable: true),
                    PollsId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentClasses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudentClasses_Plannings_PlanningId",
                        column: x => x.PlanningId,
                        principalTable: "Plannings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_StudentClasses_ClassPolls_PollsId",
                        column: x => x.PollsId,
                        principalTable: "ClassPolls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_StudentClasses_SchoolClasses_SchoolClassId",
                        column: x => x.SchoolClassId,
                        principalTable: "SchoolClasses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_StudentClasses_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ClassAbsences",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    CodeEol = table.Column<string>(nullable: true),
                    StudentClassId = table.Column<string>(nullable: true),
                    StudentCodeId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassAbsences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassAbsences_StudentClasses_StudentClassId",
                        column: x => x.StudentClassId,
                        principalTable: "StudentClasses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ClassAbsences_StudentCodes_StudentCodeId",
                        column: x => x.StudentCodeId,
                        principalTable: "StudentCodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "AccessPermission",
                columns: new[] { "Id", "CreatedAt", "Location", "ModifiedAt", "Name" },
                values: new object[] { "6f84a81e-2edc-4a28-b569-406f0c372263", new DateTime(2019, 4, 25, 16, 57, 54, 480, DateTimeKind.Local).AddTicks(9533), "/Admin", new DateTime(2019, 4, 25, 16, 57, 54, 481, DateTimeKind.Local).AddTicks(619), "Área Administrativa" });

            migrationBuilder.InsertData(
                table: "ClassAbsences",
                columns: new[] { "Id", "CodeEol", "Date", "StudentClassId", "StudentCodeId" },
                values: new object[,]
                {
                    { "43476b04-19f7-44d4-9d13-33228ed655f2", "10", new DateTime(2019, 4, 25, 16, 57, 54, 476, DateTimeKind.Local).AddTicks(2346), null, null },
                    { "4f7f3bb3-ffb5-40d0-8c69-48502073c566", "30", new DateTime(2019, 4, 25, 16, 57, 54, 480, DateTimeKind.Local).AddTicks(6659), null, null },
                    { "84147558-f861-4f9c-a010-799c27715fb4", "30", new DateTime(2019, 4, 25, 16, 57, 54, 480, DateTimeKind.Local).AddTicks(6762), null, null },
                    { "76bb9798-30e2-455c-a92a-1bd216cf2084", "30", new DateTime(2019, 4, 25, 16, 57, 54, 480, DateTimeKind.Local).AddTicks(6796), null, null },
                    { "bded361d-70d8-4e75-9f9b-9abec0193a6e", "30", new DateTime(2019, 4, 25, 16, 57, 54, 480, DateTimeKind.Local).AddTicks(6834), null, null },
                    { "de745767-c6d8-4f62-aa62-cfe45f9e5460", "30", new DateTime(2019, 4, 25, 16, 57, 54, 480, DateTimeKind.Local).AddTicks(6881), null, null }
                });

            migrationBuilder.InsertData(
                table: "Codes",
                columns: new[] { "Id", "Name" },
                values: new object[] { "6e1768df-3592-4e1c-8a84-1b7824bde8d4", "Código EOL" });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { "fddf23db-ab6b-481e-b501-129ed93f582f", "Professor" },
                    { "de2c5278-52fc-45d3-9a8a-9158afab8671", "Admin" },
                    { "cca0a8d9-3d32-48af-bb38-5daa928d188b", "Diretor" }
                });

            migrationBuilder.InsertData(
                table: "SchoolYears",
                columns: new[] { "Id", "Name", "Year" },
                values: new object[] { "e17d4088-a785-41f8-9bfe-add46bd5c1e8", "Ensino Regular", 2019 });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "ProfileId" },
                values: new object[,]
                {
                    { "bafed596-dcd6-47d5-92ac-9211ad006119", null },
                    { "6397f044-b07b-4709-bd6b-06e918c19813", null },
                    { "453eb516-4efb-4432-aafa-76ebc357fdb1", null },
                    { "5416dc1f-7251-4c37-bf13-9c4f2f3e4e9d", null },
                    { "34f816f6-23f4-4103-ac71-b4443257be94", null },
                    { "1f8cf3d7-4791-43be-a675-bc7abbb61e5d", null }
                });

            migrationBuilder.InsertData(
                table: "AccessPermissionRole",
                columns: new[] { "Id", "AccessPermissionId", "RoleId" },
                values: new object[,]
                {
                    { "ca2afbd4-9d6a-49e4-81f1-6a05908648f7", "6f84a81e-2edc-4a28-b569-406f0c372263", "de2c5278-52fc-45d3-9a8a-9158afab8671" },
                    { "470e6e7c-5608-491e-8f1a-e1450c512af2", "6f84a81e-2edc-4a28-b569-406f0c372263", "cca0a8d9-3d32-48af-bb38-5daa928d188b" },
                    { "627fa964-a82b-4a5c-8474-33a2285b9587", "6f84a81e-2edc-4a28-b569-406f0c372263", "fddf23db-ab6b-481e-b501-129ed93f582f" }
                });

            migrationBuilder.InsertData(
                table: "SchoolTerms",
                columns: new[] { "Id", "ClosureEnd", "ClosureStart", "Name", "ReportCardConsolidation", "SchoolYearId", "ValidityEnd", "ValidityStart" },
                values: new object[,]
                {
                    { "2a397bc0-2190-4c8f-b59f-cad4240f05db", new DateTime(2019, 5, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 4, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "1° Bimestre de 2019", new DateTime(2019, 5, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), "e17d4088-a785-41f8-9bfe-add46bd5c1e8", new DateTime(2019, 4, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 2, 4, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { "3948459f-3a00-4b0c-bdc7-a6839ee62774", new DateTime(2019, 7, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 6, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "2° Bimestre de 2019", new DateTime(2019, 7, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "e17d4088-a785-41f8-9bfe-add46bd5c1e8", new DateTime(2019, 7, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 5, 2, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { "10e58731-9bcb-4ff5-bf61-2fcfbcd8c988", new DateTime(2019, 10, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 9, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "3° Bimestre de 2019", new DateTime(2019, 10, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "e17d4088-a785-41f8-9bfe-add46bd5c1e8", new DateTime(2019, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 7, 22, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { "1d3df0aa-e3dc-460f-87af-592bdb69b1a2", new DateTime(2019, 12, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 12, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "4° Bimestre de 2019", new DateTime(2019, 12, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "e17d4088-a785-41f8-9bfe-add46bd5c1e8", new DateTime(2019, 12, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2019, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "StudentCodes",
                columns: new[] { "Id", "CodeId", "StudentId", "Validity", "Value" },
                values: new object[,]
                {
                    { "41b121b9-ab56-4cdb-b073-21279eba911a", "6e1768df-3592-4e1c-8a84-1b7824bde8d4", "34f816f6-23f4-4103-ac71-b4443257be94", new DateTime(9999, 12, 31, 23, 59, 59, 999, DateTimeKind.Unspecified).AddTicks(9999), "10" },
                    { "5cfab658-1faa-4e52-a7cf-d9b4e66d0d09", "6e1768df-3592-4e1c-8a84-1b7824bde8d4", "1f8cf3d7-4791-43be-a675-bc7abbb61e5d", new DateTime(9999, 12, 31, 23, 59, 59, 999, DateTimeKind.Unspecified).AddTicks(9999), "20" },
                    { "baf64de7-d726-48f7-8d4e-0a83bc2dca04", "6e1768df-3592-4e1c-8a84-1b7824bde8d4", "bafed596-dcd6-47d5-92ac-9211ad006119", new DateTime(9999, 12, 31, 23, 59, 59, 999, DateTimeKind.Unspecified).AddTicks(9999), "30" },
                    { "a009a3cd-b72a-4e50-8541-0148cd8806e9", "6e1768df-3592-4e1c-8a84-1b7824bde8d4", "6397f044-b07b-4709-bd6b-06e918c19813", new DateTime(9999, 12, 31, 23, 59, 59, 999, DateTimeKind.Unspecified).AddTicks(9999), "40" },
                    { "c70216d0-c19a-4147-9430-93e0b122eea3", "6e1768df-3592-4e1c-8a84-1b7824bde8d4", "453eb516-4efb-4432-aafa-76ebc357fdb1", new DateTime(9999, 12, 31, 23, 59, 59, 999, DateTimeKind.Unspecified).AddTicks(9999), "50" },
                    { "2129e985-a350-4cee-b358-1021014681e3", "6e1768df-3592-4e1c-8a84-1b7824bde8d4", "5416dc1f-7251-4c37-bf13-9c4f2f3e4e9d", new DateTime(9999, 12, 31, 23, 59, 59, 999, DateTimeKind.Unspecified).AddTicks(9999), "60" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccessPermissionRole_AccessPermissionId",
                table: "AccessPermissionRole",
                column: "AccessPermissionId");

            migrationBuilder.CreateIndex(
                name: "IX_AccessPermissionRole_RoleId",
                table: "AccessPermissionRole",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualPlans_PlanningId",
                table: "AnnualPlans",
                column: "PlanningId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClassAbsences_StudentClassId",
                table: "ClassAbsences",
                column: "StudentClassId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassAbsences_StudentCodeId",
                table: "ClassAbsences",
                column: "StudentCodeId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassModeCalendars_ClassModeId",
                table: "ClassModeCalendars",
                column: "ClassModeId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassModeCalendars_SchoolYearId",
                table: "ClassModeCalendars",
                column: "SchoolYearId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassPolls_PollPortugueseId",
                table: "ClassPolls",
                column: "PollPortugueseId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClassSchedules_PlanningId",
                table: "ClassSchedules",
                column: "PlanningId");

            migrationBuilder.CreateIndex(
                name: "IX_Plannings_DisciplineId",
                table: "Plannings",
                column: "DisciplineId");

            migrationBuilder.CreateIndex(
                name: "IX_Plannings_SchoolClassId",
                table: "Plannings",
                column: "SchoolClassId");

            migrationBuilder.CreateIndex(
                name: "IX_Profiles_UserId",
                table: "Profiles",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SchoolCalendars_SchoolId",
                table: "SchoolCalendars",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolCalendars_SchoolYearId",
                table: "SchoolCalendars",
                column: "SchoolYearId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolClasses_ClassModeId",
                table: "SchoolClasses",
                column: "ClassModeId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolClasses_SchoolId",
                table: "SchoolClasses",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_Schools_RegionalBoardEducationId",
                table: "Schools",
                column: "RegionalBoardEducationId");

            migrationBuilder.CreateIndex(
                name: "IX_SchoolTerms_SchoolYearId",
                table: "SchoolTerms",
                column: "SchoolYearId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentClasses_PlanningId",
                table: "StudentClasses",
                column: "PlanningId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentClasses_PollsId",
                table: "StudentClasses",
                column: "PollsId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_StudentClasses_SchoolClassId",
                table: "StudentClasses",
                column: "SchoolClassId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentClasses_StudentId",
                table: "StudentClasses",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentCodes_CodeId",
                table: "StudentCodes",
                column: "CodeId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentCodes_StudentId",
                table: "StudentCodes",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_ProfileId",
                table: "Students",
                column: "ProfileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserCodes_CodeId",
                table: "UserCodes",
                column: "CodeId");

            migrationBuilder.CreateIndex(
                name: "IX_UserCodes_UserId",
                table: "UserCodes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_RoleId",
                table: "UserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_UserId",
                table: "UserRoles",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccessPermissionRole");

            migrationBuilder.DropTable(
                name: "AnnualPlans");

            migrationBuilder.DropTable(
                name: "ClassAbsences");

            migrationBuilder.DropTable(
                name: "ClassModeCalendars");

            migrationBuilder.DropTable(
                name: "ClassSchedules");

            migrationBuilder.DropTable(
                name: "Cycles");

            migrationBuilder.DropTable(
                name: "LoggedUsers");

            migrationBuilder.DropTable(
                name: "SchoolCalendars");

            migrationBuilder.DropTable(
                name: "SchoolTerms");

            migrationBuilder.DropTable(
                name: "UserCodes");

            migrationBuilder.DropTable(
                name: "UserRoles");

            migrationBuilder.DropTable(
                name: "AccessPermission");

            migrationBuilder.DropTable(
                name: "StudentClasses");

            migrationBuilder.DropTable(
                name: "StudentCodes");

            migrationBuilder.DropTable(
                name: "SchoolYears");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Plannings");

            migrationBuilder.DropTable(
                name: "ClassPolls");

            migrationBuilder.DropTable(
                name: "Codes");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Disciplines");

            migrationBuilder.DropTable(
                name: "SchoolClasses");

            migrationBuilder.DropTable(
                name: "PollPortugueses");

            migrationBuilder.DropTable(
                name: "Profiles");

            migrationBuilder.DropTable(
                name: "ClassModes");

            migrationBuilder.DropTable(
                name: "Schools");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "RegionalBoardEducations");
        }
    }
}
