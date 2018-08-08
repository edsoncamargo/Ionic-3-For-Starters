import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Configurations } from '../../models/configurations';

const CONFIG_LOCAL_SOTORAGE = "config";

@Injectable()

export class ConfigProvider {

  private config: Configurations;
  private showSlide: boolean = false;
  private name: string;
  private username: string;

  constructor() {

  }

  // Recuperar os dados do localstorage
  getConfig(): any {
    return localStorage.getItem(CONFIG_LOCAL_SOTORAGE);
  }

  // Gravar os dados no localstorage
  setConfig(showSlide?: boolean, name?: string, username?: string) {
    let config = new Configurations(showSlide, name, username);

    if (showSlide) {  
      config.showSlide = showSlide;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username;
    }

    localStorage.setItem(CONFIG_LOCAL_SOTORAGE, JSON.stringify(config));
  }

}
