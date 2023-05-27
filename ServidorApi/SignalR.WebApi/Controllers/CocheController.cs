using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SignalR.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CocheController : ControllerBase
    {
        List<Coche> coches = new List<Coche>()
        {
            new Coche(){Id=1, Name = "Renault"},
            new Coche(){Id=2, Name = "Passat"}
        };

        [HttpGet]
        public ActionResult<Coche> Get (int id)
        {
            var coche = coches.Where(c=> c.Id == id).FirstOrDefault();
            if (coche == null) return NotFound();
            return Ok(coche);
        }
    }

    public class Coche
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
    }
}
