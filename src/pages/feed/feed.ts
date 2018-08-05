import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})

export class FeedPage {

  public userName: string = "Edson Camargo";
  public contLikes: number = 0;
  public currentDate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentDate = Date();
  }

  buttonLikes() {
    this.contLikes += 1;
  }

  ionViewDidLoad() { }

}
