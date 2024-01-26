using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
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
        public async Task<ActionResult> CreateProduct([FromForm]Img model)
        {
            try
            { 
                MemoryStream memoryStream = new MemoryStream(); 
                var author = _context.Product.First(a => a.ID == model.ID);
                author.Name = model.Name;
                author.Price = model.Price;
                author.CategoryID = model.CategoryID;
                author.CreateDate = DateTime.Now;
                author.URLProduct = model.URLProduct;
                author.Description = model.Description; 
                if(model.file != null)
                {   
                    var checkImg = _context.Product.FirstOrDefault(a => a.img == "/img/product/" + model.file.FileName.ToString()
                                                            || a.img1 == "/img/product/" + model.file.FileName.ToString()
                                                            || a.img2 == "/img/product/" + model.file.FileName.ToString()
                                                            || a.img3 == "/img/product/" + model.file.FileName.ToString()
                                                            || a.img4 == "/img/product/" + model.file.FileName.ToString()
                                                            || a.img5 == "/img/product/" + model.file.FileName.ToString());
                    if(checkImg == null)
                    { 
                        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/product/", model.file.FileName);
                        var stream = new FileStream(path, FileMode.OpenOrCreate);
                        model.file.CopyToAsync(stream);
                    }
                    author.img = "/img/product/" + model.file.FileName.ToString();
                    _context.SaveChanges();
                }
                if (model.file1 != null)
                {
                    var checkImg = _context.Product.FirstOrDefault(a => a.img == "/img/product/" + model.file1.FileName.ToString()
                                                            || a.img1 == "/img/product/" + model.file1.FileName.ToString()
                                                            || a.img2 == "/img/product/" + model.file1.FileName.ToString()
                                                            || a.img3 == "/img/product/" + model.file1.FileName.ToString()
                                                            || a.img4 == "/img/product/" + model.file1.FileName.ToString()
                                                            || a.img5 == "/img/product/" + model.file1.FileName.ToString());
                    if (checkImg == null)
                    {
                        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/product/", model.file1.FileName);
                        var stream = new FileStream(path, FileMode.OpenOrCreate);
                        model.file1.CopyToAsync(stream);
                    }
                    author.img1 = "/img/product/" + model.file1.FileName.ToString();
                    _context.SaveChanges();
                }
                if (model.file2 != null)
                {
                    var checkImg2 = _context.Product.FirstOrDefault(a => a.img == "/img/product/" + model.file2.FileName.ToString()
                                                            || a.img1 == "/img/product/" + model.file2.FileName.ToString()
                                                            || a.img2 == "/img/product/" + model.file2.FileName.ToString()
                                                            || a.img3 == "/img/product/" + model.file2.FileName.ToString()
                                                            || a.img4 == "/img/product/" + model.file2.FileName.ToString()
                                                            || a.img5 == "/img/product/" + model.file2.FileName.ToString());
                    if (checkImg2 == null)
                    {
                        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/product/", model.file2.FileName);
                        var stream = new FileStream(path, FileMode.OpenOrCreate);
                        model.file2.CopyToAsync(stream);
                    }
                    author.img2 = "/img/product/" + model.file2.FileName.ToString();
                    _context.SaveChanges();
                }
                if (model.file3 != null)
                {
                    var checkImg3 = _context.Product.FirstOrDefault(a => a.img == "/img/product/" + model.file3.FileName.ToString()
                                                            || a.img1 == "/img/product/" + model.file3.FileName.ToString()
                                                            || a.img2 == "/img/product/" + model.file3.FileName.ToString()
                                                            || a.img3 == "/img/product/" + model.file3.FileName.ToString()
                                                            || a.img4 == "/img/product/" + model.file3.FileName.ToString()
                                                            || a.img5 == "/img/product/" + model.file3.FileName.ToString());
                    if (checkImg3 == null)
                    {
                        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/product/", model.file3.FileName);
                        var stream = new FileStream(path, FileMode.OpenOrCreate);
                        model.file3.CopyToAsync(stream);
                    }
                    author.img3 = "/img/product/" + model.file3.FileName.ToString();
                    _context.SaveChanges();
                }
                if (model.file4 != null)
                {
                    var checkImg4 = _context.Product.FirstOrDefault(a => a.img == "/img/product/" + model.file4.FileName.ToString()
                                                            || a.img1 == "/img/product/" + model.file4.FileName.ToString()
                                                            || a.img2 == "/img/product/" + model.file4.FileName.ToString()
                                                            || a.img3 == "/img/product/" + model.file4.FileName.ToString()
                                                            || a.img4 == "/img/product/" + model.file4.FileName.ToString()
                                                            || a.img5 == "/img/product/" + model.file4.FileName.ToString());
                    if (checkImg4 == null)
                    {
                        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/product/", model.file4.FileName);
                        var stream = new FileStream(path, FileMode.OpenOrCreate);
                        model.file4.CopyToAsync(stream);
                    }
                    author.img4 = "/img/product/" + model.file4.FileName.ToString();
                    _context.SaveChanges();
                }
                if (model.file5 != null)
                {
                    var checkImg5 = _context.Product.FirstOrDefault(a => a.img == "/img/product/" + model.file5.FileName.ToString()
                                                            || a.img1 == "/img/product/" + model.file5.FileName.ToString()
                                                            || a.img2 == "/img/product/" + model.file5.FileName.ToString()
                                                            || a.img3 == "/img/product/" + model.file5.FileName.ToString()
                                                            || a.img4 == "/img/product/" + model.file5.FileName.ToString()
                                                            || a.img5 == "/img/product/" + model.file5.FileName.ToString());
                    if (checkImg5 == null)
                    {
                        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/product/", model.file5.FileName);
                        var stream = new FileStream(path, FileMode.OpenOrCreate);
                        model.file5.CopyToAsync(stream);
                    }
                    author.img5 = "/img/product/" + model.file5.FileName.ToString();
                    _context.SaveChanges();
                }

                return View("Admin", author);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
