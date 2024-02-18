using Microsoft.AspNetCore.Mvc;
using Store.Models;

namespace Store.Controllers
{
    public class Drinks : Controller
    {
        public IActionResult Index(HomeModel model)
        {
            return View(model);
        }
    }
}
