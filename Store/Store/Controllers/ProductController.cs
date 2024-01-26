
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Store.Models;
using Store.Models.AppDbContext; 

namespace Store.Controllers
{ 
    public class ProductController : Controller
    {

        private readonly AppDbContext _context;
         
        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        [Route("chi-tiet-san-pham/{nameProduct}/{id}")]
        [Route("Home/chi-tiet-san-pham/{nameProduct}/{id}")]
        public IActionResult ProductDetail(int ?id)
        {
            ViewBag.IDProduct = id; 
            return View();
        }
        [HttpGet]
        public async Task<ActionResult> listProductDetail(int id=0)
        {
            var result = await _context.Product.FromSqlRaw($"SELECT TOP 1 * FROM dbo.Product  WHERE ID = {id}").ToListAsync();
            return Ok(result);
        }
    }
}
