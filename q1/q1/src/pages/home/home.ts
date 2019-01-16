import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { CalculatePage } from '../calculate/calculate';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  interest:any

  constructor(public navParams: NavParams,public navCtrl: NavController, public http: HttpClient) {

  }
  done1(){
    this.navCtrl.push(CalculatePage,this.interest);
  }

}
