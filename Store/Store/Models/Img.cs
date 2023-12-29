namespace Store.Models
{ 
    public class Img
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int CategoryID { get; set; }
        public string URLProduct { get; set; }
        public string Description { get; set; }
        public Img? file { get; set; }
        public Img? file1 { get; set; }
        public Img? file2 { get; set; }
        public Img? file3 { get; set; }
        public Img? file4 { get; set; }
        public Img? file5 { get; set; }
    }
}
