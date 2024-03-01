
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
            var product = _context.Product.FirstOrDefault(m => m.ID == id); 
            return View(product);
        }
        [HttpGet]
        public async Task<ActionResult> listProductDetail(int id=0)
        {
            var result = await _context.Product.FromSqlRaw($"SELECT TOP 1 * FROM dbo.Product  WHERE ID = {id}").ToListAsync();
            return Ok(result);
        }
        public IActionResult ListMenu(int PageID)
        {
            try
            {
                var query = @"SELECT P.ID PageID, p.Name PageName,c.Name CategoryName, PD.* FROM dbo.Page P JOIN dbo.Category C ON P.ID= C.PageID JOIN dbo.Product PD ON  PD.CategoryID = C.ID and p.id=" + PageID;
                var result = _context.ProductView.FromSqlRaw(query).OrderBy(q => q.Name).ToList();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        

            
    }
}
