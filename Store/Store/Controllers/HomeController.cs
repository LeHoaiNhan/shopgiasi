
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Store.Models;
using Store.Models.AppDbContext;
using Store.Models.Table;
using System.Diagnostics;
using System.Text.RegularExpressions;

namespace Store.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController( AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index(HomeModel model)
        {  
            return View(model);
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

        public async Task<ActionResult<List<ProductJoinCategory>>> listProduct(int maxID = 0, int numberCount = 0, int CategoryID = 0,int Type = 0)
        {
            var result = await _context.Product.FromSqlRaw($"SELECT TOP {numberCount} P.*,C.URLCategory FROM dbo.Product P JOIN Category C on P.CategoryID = C.ID WHERE P.ID >"+ maxID + " AND c.id=CASE WHEN " + CategoryID + "=0 THEN c.id ELSE " + CategoryID + " end and c.Type="+ Type).ToListAsync();
            return Ok(result);
        }
        #endregion
        #region CATEGORY
        public async Task<ActionResult<List<CategoryJoinProduct>>> listCategory( int Type = 0)
        {
            try
            {
                var result = await _context.CategoryJoinProduct.FromSqlRaw($"SELECT C.ID,C.Name,COUNT(P.ID) ProductNumber,c.URLCategory FROM dbo.Category C LEFT JOIN dbo.Product P ON P.CategoryID = C.ID where c.type={Type} GROUP BY  C.ID,C.Name,c.URLCategory").ToListAsync();
                return Ok(result); 
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        #endregion
    }
}