
namespace Store.Models.Table
{
    public class Page
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }

    public class PageView
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int PageNumber { get; set; }
    }
} 
