import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {
  public Q2:any = [];

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }
  Done(){
    let body = {
      "id": this.Q2.id,
      "nameProduct":this.Q2.nameProduct,
      "price":this.Q2.price

    };
    this.http.post("https://localhost:5001/api/Q2",body)
    .subscribe((data) =>{

    });
    
    this.navCtrl.push(HomePage)
  }

}
