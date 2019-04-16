import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
        this.bloqueos = data;
        console.log('es el console de los bloqueos' + this.bloqueos);
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

  ingresarBloqueo() {
    this.navCtrl.push(IngresarbloqueoPage);
  }

  desbloquear(bloqueo: any) {
    console.log(bloqueo.id);
    let id = bloqueo.id;
    this.coreProvider.desbloquear(id)
      .subscribe(data => {
        this.alertController.create({
          title: 'Persona Desbloqueada',
          message: bloqueo.nombreBloqueado + 'Ha sido Desbloqueado OK.',
          buttons: ["OK"]
        }).present();
        this.navCtrl.setRoot(BloqueosPage);
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

}
