using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Store.Models;
using Store.Models.AppDbContext; 
namespace Store.Controllers
{
    public class AdminController : Controller
    {
        private readonly AppDbContext _context;

        public AdminController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Admin()
        {
            return View();
        }
        public async Task<ActionResult> CreateProduct([FromForm]Img model,IFormFile file, IFormFile file1, IFormFile file2, IFormFile file3, IFormFile file4, IFormFile file5)
        {
            try
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/product/", file.Name);
            //    System.IO.File.Move(file.Name, "Product" + DateTime.Now.ToString("yyMMddhhmmss"));
                var stream=new FileStream(path,FileMode.Create);
                file.CopyToAsync(stream);

                var author = _context.Product.First(a => a.ID == model.ID);
                author.Name = model.Name;
                author.Price = model.Price;
                author.CategoryID = model.CategoryID;
                author.CreateDate = DateTime.Now;
                author.URLProduct = model.URLProduct;
                author.Description = model.Description;

                author.img = file.FileName != null ? file.FileName : author.img;
                author.img1 = file1.FileName != null ? file1.FileName : author.img1;
                author.img2 = file2.FileName != null ? file2.FileName : author.img2;
                author.img3 = file3.FileName != null ? file3.FileName : author.img3;
                author.img4 = file4.FileName != null ? file4.FileName : author.img4;
                author.img5 = file5.FileName != null ? file5.FileName : author.img5;

                 
                _context.SaveChanges(); 
                return Ok(author);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
