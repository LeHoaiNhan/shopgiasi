﻿using System.ComponentModel.DataAnnotations;

namespace Store.Models
{
    public class Product
    {
        [Key]
        public int ID { get; set; }
        public string? Name { get; set; }
        public int Price {  get; set; }
        public DateTime CreateDate { get; set; }
        public int CategoryID {  get; set; }
        public string? URLProduct { get; set; } 
        public string? Description { get; set; }
        public string? img { get; set; }
        public string? img1 { get; set; }
        public string? img2 { get; set; }
        public string? img3 { get; set; }
        public string? img4 { get; set; }
        public string? img5 { get; set; }
    }
    public class ProductJoinCategory
    {
        [Key]
        public int ID { get; set; }
        public string? Name { get; set; }
        public int Price { get; set; }
        public DateTime CreateDate { get; set; }
        public int CategoryID { get; set; }
        public string? URLProduct { get; set; }
        public string? URLCategory { get; set; }
        public string? Description { get; set; }
        public string? img { get; set; }
        public string? img1 { get; set; }
        public string? img2 { get; set; }
        public string? img3 { get; set; }
        public string? img4 { get; set; }
        public string? img5 { get; set; }
    }
}
