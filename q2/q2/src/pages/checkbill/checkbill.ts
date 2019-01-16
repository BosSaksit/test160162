import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CheckbillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkbill',
  templateUrl: 'checkbill.html',
})
export class CheckbillPage {
  public Q2:any = [];
  payment:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    
  }

  ionViewDidLoad() {
    this.http.get("https://localhost:5001/api/Q2").subscribe((data) =>{
      this.Q2 = data;
      this.payment = this.Q2.pay;
      console.log(JSON.stringify(data));
      console.log(JSON.stringify(this.Q2));
    
    });
    console.log('ionViewDidLoad CheckbillPage');
    console.log(this.Q2);
    
  }
  calculate(){
    let body = {
      "id": this.Q2.id,
      "nameProduct": this.Q2.nameProduct,
      "price":this.Q2.price,
      "amount": this.Q2.amount,
    };
    this.http.put("https://localhost:5001/api/Q2/"+this.Q2.id,body).subscribe(
      (data) => {
      
      }
    );
    this.http.get("https://localhost:5001/api/Q2").subscribe((data) =>{
      this.Q2 = data;
    });

  }
}
