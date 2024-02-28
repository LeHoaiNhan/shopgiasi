
using Microsoft.EntityFrameworkCore;
using Store.Models.Table;

namespace Store.Models.AppDbContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Page> Page { get; set; } = null!;
        public DbSet<PageView> PageView { get; set; } = null!;
        public DbSet<Product> Product { get; set; } = null!;
        public DbSet<ProductView> ProductView { get; set; } = null!; 
        public DbSet<Category> Category { get; set; } = null!;
        public DbSet<CategoryJoinProduct> CategoryJoinProduct { get; set; } = null!;
    }
}
