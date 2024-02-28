namespace Store.Models
{
    public class HomeModel
    {
        public int CategoryID { get; set; }
        public int PageID { get; set; } = 0;
    }

    public class Img
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int CategoryID { get; set; }
        public string URLProduct { get; set; }
        public string Description { get; set; }
        public IFormFile file { get; set; }
        public IFormFile file1 { get; set; }
        public IFormFile file2 { get; set; }
        public IFormFile file3 { get; set; }
        public IFormFile file4 { get; set; }
        public IFormFile file5 { get; set; }
    } 
}
