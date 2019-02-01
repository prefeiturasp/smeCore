using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace smeCore.SGP.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Annuals",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    SchoolYear = table.Column<int>(nullable: true),
                    Classroom = table.Column<string>(nullable: true),
                    School = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    SelectedLearningObjectivesB1 = table.Column<string>(nullable: true),
                    DescriptionB1 = table.Column<string>(nullable: true),
                    SelectedLearningObjectivesB2 = table.Column<string>(nullable: true),
                    DescriptionB2 = table.Column<string>(nullable: true),
                    SelectedLearningObjectivesB3 = table.Column<string>(nullable: true),
                    DescriptionB3 = table.Column<string>(nullable: true),
                    SelectedLearningObjectivesB4 = table.Column<string>(nullable: true),
                    DescriptionB4 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Annuals", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    SchoolYear = table.Column<int>(nullable: true),
                    Classroom = table.Column<string>(nullable: true),
                    School = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    TagColor = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointments", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Cycles",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    SchoolYear = table.Column<int>(nullable: true),
                    Classroom = table.Column<string>(nullable: true),
                    School = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    SelectedKnowledgeMatrix = table.Column<string>(nullable: true),
                    SelectedODS = table.Column<string>(nullable: true),
                    ModifiedBy = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cycles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "LoggedUsers",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    RefreshToken = table.Column<string>(nullable: true),
                    LastLogin = table.Column<DateTime>(nullable: false),
                    ExpiresAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoggedUsers", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Annuals");

            migrationBuilder.DropTable(
                name: "Appointments");

            migrationBuilder.DropTable(
                name: "Cycles");

            migrationBuilder.DropTable(
                name: "LoggedUsers");
        }
    }
}
