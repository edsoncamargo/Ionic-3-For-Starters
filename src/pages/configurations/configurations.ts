import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from './../profile/profile';
import { AboutPage } from './../about/about';

@IonicPage()

@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html',
})
export class ConfigurationsPage {

  rootPage = ProfilePage;
  rootProfilePage = ProfilePage;
  rootAboutPage = AboutPage

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  openPage(page) {
    this.navCtrl.push(page);
  }

}
