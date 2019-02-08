namespace smeCore.Models.Authentication
{
    public class Identity
    {
        public string code { get; set; }
        public string id_token { get; set; }
        public string access_token { get; set; }
        public string token_type { get; set; }
        public string expires_in { get; set; }
        public string scope { get; set; }
        public string state { get; set; }
        public string sesion_state { get; set; }
    }
}