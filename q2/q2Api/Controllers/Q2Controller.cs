using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using q2Api.Models;

namespace q2Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Q2Controller : ControllerBase
    {
        public static List<Q2> data = new List<Q2>{
            new Q2 {Id = 1,nameProduct = "iphone",Price = 123}
 
        };
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Q2>> Get()
        {

           return data.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Q2> Get(int id)
        {
            return data.FirstOrDefault(it => it.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post(Q2 model)
        { 
        {
             var id = data.Max(it => it.Id)+1;
            model.Id = id;
            data.Add(model);
        }
           
        }
    
        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id,Q2 model)
        {
            if (model.Amount>0){
            var idx = model.Id;
            var name = model.nameProduct;
            var price = model.Price;
            var amount = model.Amount;
            var total =model.Total;
            var pay = model.Pay;
            for (int i = 1; i <= idx; i++)
            {
                var sum = new Q2(){
                    nameProduct = name,
                    
                    Price = price,
                    Amount = amount,
                    Total = price*amount,
                    Pay = price*amount+pay,
                    Id = i,
                   
                };
               pay = sum.Pay;
            var edit = data.FirstOrDefault(it => it.Id==id);
            data.Remove(edit);
            model.Id = id;
            data.Add(sum);
            }
            pay = pay;
        }else if(model.Amount%4==0){
            var idx = model.Id;
            var name = model.nameProduct;
            var price = model.Price;
            var amount = model.Amount;
            var total =model.Total;
            var pay = model.Pay;
            for (int i = 1; i <= idx; i++)
            {
                var sum = new Q2(){
                    nameProduct = name,
                    Price = price,
                    Amount = amount,
                    Total = (price*amount)-price,
                    Pay = (((price*amount)+pay)-price),
                    Id = i,
                   
                };
                pay = sum.Pay;
                var edit = data.FirstOrDefault(it => it.Id==id);
            data.Remove(edit);
            model.Id = id;
            data.Add(sum);
            }
            pay=pay;
        }else{
            var edit = data.FirstOrDefault(it => it.Id==id);
            data.Remove(edit);
            model.Id = id;
            data.Add(model);
        }
        }
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var delete = data.FirstOrDefault(it => it.Id==id);
            data.Remove(delete);
        }
    }
}