import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroductionPage } from './../pages/introduction/introduction';
import { TabsPage } from './../pages/tabs/tabs';

import { Configurations } from './../models/configurations';

import { ConfigProvider } from './../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage: any = IntroductionPage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    cp: ConfigProvider) {
    platform.ready().then(() => {

      let config: Configurations = cp.getConfig();
      if (config == null) {
        this.rootPage = IntroductionPage;
        cp.setConfig(false);
      } else {
        this.rootPage = TabsPage;
      }

      if (platform.is("cordova")) {
        statusBar.styleDefault();
        splashScreen.hide();
      }
    });
  }
}
