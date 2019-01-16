import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatePage } from '../calculate/calculate';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  done1(){
    this.navCtrl.push(CalculatePage);
  }

}
