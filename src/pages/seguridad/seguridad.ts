import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SeguridadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguridad',
  templateUrl: 'seguridad.html',
})
export class SeguridadPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguridadPage');
  }

  enviarBotonPanico(){
    let mensaje="Se ha enviado Emergencia a Conserjería";
    this.showToast(mensaje);
  }

  showToast(mensaje: string){
    let toast = this.toastCtrl.create({
      message:mensaje,
      duration:2000,
      position:'middle'
    });

    toast.present(toast);
  }

}
