import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdditemPage } from '../additem/additem';
import { CheckbillPage } from '../checkbill/checkbill';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public Q2:any = [];
  amountx:any

  constructor(public navCtrl: NavController,public http:HttpClient) {
   this.Q2.amount = this.amountx;
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter HomePage');
    this.http.get("https://localhost:5001/api/Q2").subscribe((data) =>{
      this.Q2 = data;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.http.get("https://localhost:5001/api/Q2").subscribe((data) =>{
      this.Q2 = data;
      console.log(this.Q2);
    });
  }
  AddOrder(n:number,n1:string,n3:number){
    this.Q2.id = n;
    this.Q2.nameProduct = n1;
    this.Q2.price = n3;
    let body = {
      "id": this.Q2.id,
      "nameProduct": this.Q2.nameProduct,
      "price":this.Q2.price,
      "amount": this.Q2.amount,
    };
    this.http.put("https://localhost:5001/api/Q2/"+this.Q2.id,body).subscribe(
      (data) => {
       this.ionViewDidEnter();
      }
    );
  }
  
  toAdditem(){
    this.navCtrl.push(AdditemPage)
  }
  toBill(){
    this.navCtrl.push(CheckbillPage)
  }

}
