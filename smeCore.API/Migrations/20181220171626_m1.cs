using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace smeCore.API.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "LoggedUsers");
        }
    }
}
