import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurationsPage } from './configurations';

@NgModule({
  declarations: [
    ConfigurationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurationsPage),
  ], 
  exports: [
    ConfigurationsPage
  ]
})
export class ConfigurationsPageModule {}
