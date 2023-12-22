 
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Store.Models;
using Store.Models.AppDbContext;
using System.Diagnostics;

namespace Store.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController( AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        #region PRODUCTION
        public async Task<ActionResult<List<ProductJoinCategory>>> listProduct(int maxID=0, int numberCount = 0)
        {
            var result = await _context.Products.FromSqlRaw($"SELECT TOP {numberCount} P.*,C.URLCategory FROM dbo.Product P JOIN Category C on P.CategoryID = C.ID WHERE P.ID >{maxID}").ToListAsync(); 
            return Ok(result);
        }
             

        #endregion
    }
}