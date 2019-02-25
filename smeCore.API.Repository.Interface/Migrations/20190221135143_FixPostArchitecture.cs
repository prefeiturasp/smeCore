using Microsoft.EntityFrameworkCore.Migrations;

namespace smeCore.API.Repository.Interface.Migrations
{
    public partial class FixPostArchitecture : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "LoggedUsers",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "LoggedUsers",
                newName: "id");
        }
    }
}
