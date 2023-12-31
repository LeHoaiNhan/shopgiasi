﻿ 
using Microsoft.EntityFrameworkCore;

namespace Store.Models.AppDbContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Product> Product { get; set; } = null!;
        public DbSet<Category> Category { get; set; } = null!;
    }
}
