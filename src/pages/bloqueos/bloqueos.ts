import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngresarbloqueoPage } from '../ingresarbloqueo/ingresarbloqueo';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloqueosPage');
    //todo:gfgf
  }

  ingresarBloqueo(){
    this.navCtrl.push(IngresarbloqueoPage);
  }

}
