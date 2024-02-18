using Microsoft.AspNetCore.Mvc;
using Store.Models;

namespace Store.Controllers
{
    public class Nails : Controller
    {
        public IActionResult Index(HomeModel model)
        {
            return View(model);
        }
    }
}
