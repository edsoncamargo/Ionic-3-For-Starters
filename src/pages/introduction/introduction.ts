import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})

export class IntroductionPage {

  pushPage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.pushPage = TabsPage;
  }

  ionViewDidLoad() { }

  // Mais uma forma de ir para outra página, colocando essa função dentro de um (clique) no lugar que quiser fazer a transição
  //   pageTabs() { 
  //   this.navCtrl.push(TabsPage);
  //  }

}
