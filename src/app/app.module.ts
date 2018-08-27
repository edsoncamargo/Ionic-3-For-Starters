import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http"
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroductionPageModule } from './../pages/introduction/introduction.module';
import { ConfigurationsPageModule } from '../pages/configurations/configurations.module';
import { ProfilePageModule } from './../pages/profile/profile.module';
import { AboutPageModule } from './../pages/about/about.module';
import { MovieDetailsPageModule } from './../pages/movie-details/movie-details.module';

import { MovieProvider } from '../providers/movie/movie';
import { StorageProvider } from '../providers/storage/storage';
import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FeedPageModule,
    IntroductionPageModule,
    ConfigurationsPageModule,
    ProfilePageModule,
    AboutPageModule,
    MovieDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider,
    StorageProvider,
    ConfigProvider
  ]
})

export class AppModule { }
