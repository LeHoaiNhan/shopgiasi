using System.ComponentModel.DataAnnotations;

namespace Store.Models.Table
{
    public class Category
    {
        [Key] public int ID { get; set; }
        public string Name { get; set; }
        public string URLCategory { get; set; } 
    }
    public class CategoryJoinProduct
    {
        [Key] public int ID { get; set; }
        public string Name { get; set; }
        public string URLCategory { get; set; }
        public int ProductNumber { get; set; }
    }
}
