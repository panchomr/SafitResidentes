import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { IngresarbloqueoPage } from '../ingresarbloqueo/ingresarbloqueo';
import { CoreProvider } from '../../providers/core/core';

/**
 * Generated class for the BloqueosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloqueos',
  templateUrl: 'bloqueos.html',
})
export class BloqueosPage {
  bloqueos: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public coreProvider: CoreProvider,
              public alertController: AlertController) {
    this.coreProvider.getBloqueos()
    .subscribe(data => {
      console.log(data);
      this.bloqueos = data;
    },
      error => {
        console.log(error);
        this.alertController.create({
          title: 'Error',
          message: error.error,
          buttons: ["OK"]
        }).present();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloqueosPage');
    //todo:gfgf
  }

  ingresarBloqueo(){
    this.navCtrl.push(IngresarbloqueoPage);
  }

  desbloquear(bloqueo:any){
    console.log(bloqueo);
  }

}
