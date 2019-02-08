namespace smeCore.Models.Authentication
{
    public class Credential
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string RefreshToken { get; set; }
    }
}