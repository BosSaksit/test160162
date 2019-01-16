import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the CalculatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculate',
  templateUrl: 'calculate.html',
})
export class CalculatePage {
  public q1x: any = [];

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
    this.http.get("https://localhost:5001/api/Q1")
      .subscribe((data) => {
        this.q1x = data;
        console.log(JSON.stringify(data));
        console.log(JSON.stringify(this.q1x));
        console.log(this.q1x)
      });

  }
}