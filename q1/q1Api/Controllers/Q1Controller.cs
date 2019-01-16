using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using q1Api.Models;

namespace testapi.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class Q1Controller : ControllerBase
    {
        public static List<Q1> data = new List<Q1>{
             new Q1 { Id = 1, Outstanding = 2300 ,Interest = 12333 , Payments = 123466 },
             new Q1 { Id = 2,Outstanding = 2355,Interest = 12541, Payments = 12300 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Q1>> Get()
        {
            return data.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Q1> Get(int id)
        {
            return data.FirstOrDefault(it => it.Id == id);
        }

        [HttpPost]
        public void Post(Q1 model)
        {
            var id = data.Max(it => it.Id) + 1;
            model.Id = id;
            data.Add(model);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var selectedStudent = data.FirstOrDefault(it => it.Id == id);
            data.Remove(selectedStudent);
        }

        [HttpPut("{id}")]
        public void Put(int id, Q1 model)
        {
            var selectedStudent = data.FirstOrDefault(it => it.Id == id);
            data.Remove(selectedStudent);

            model.Id = id;
            data.Add(model);
        }
    }
}