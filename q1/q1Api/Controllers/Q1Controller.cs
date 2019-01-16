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
           var year = model.Id;
           var Interest2 = model.Interest;
           var moneyStart = model.Outstanding;
           
           for (int i = 0; i < year; i++)
           {
               var sum = new Q1(){
                   Outstanding = moneyStart,
                   Interest = Interest2,
                   Total = (moneyStart * Interest2)/100,
                   Payments = moneyStart+((moneyStart * Interest2)/100),
                   
                  // Payments = ((moneyStart * Interest2)/100),
                   Id = i+1
               };
               data.Add(sum);
               moneyStart = sum.Payments;
           }

           /* var id = data.Max(it => it.Id) + 1;
            model.Id = id;
            data.Add(model);*/
        }

        [HttpDelete()]
        public void Delete()
        {
            
            data.RemoveAll(it => true);
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