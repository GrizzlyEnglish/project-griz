using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class HomeController : Controller
    {
        // 
        // GET: /HelloWorld/

        public ActionResult Index()
        {
            return View("griz.home");
        }
    }
}