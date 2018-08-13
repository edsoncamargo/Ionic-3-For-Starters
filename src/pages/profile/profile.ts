import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [
    Camera // Será adicionado aqui, pois é um serviço nativo, não é distribuido pelo ionic
  ]
})

export class ProfilePage {

  img: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {
  }

  ionViewDidLoad() { }

  takePicture() {
    const options: CameraOptions = { // Opções de camera
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL, // A foto traduzido em texto
      encodingType: this.camera.EncodingType.JPEG, // Formato da foto
      mediaType: this.camera.MediaType.PICTURE // Tipo de arquivo
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

}
