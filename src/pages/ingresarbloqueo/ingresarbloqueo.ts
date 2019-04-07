import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreProvider } from '../../providers/core/core';
import { BloqueosPage } from '../bloqueos/bloqueos';
/**
 * Generated class for the IngresarbloqueoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresarbloqueo',
  templateUrl: 'ingresarbloqueo.html',
})
export class IngresarbloqueoPage {
  myForm: FormGroup;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public coreProvider: CoreProvider,
    public alertController: AlertController) {
    this.myForm = this.createMyForm();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarbloqueoPage');
  }
  private createMyForm() {
    return this.formBuilder.group({

      name: ['', Validators.required],
      observacion: [''],
    });
  }

  onSubmit(value: any) {
    //todo: enviar a base datos crear tabla bloqueos
    this.coreProvider.ingresarBloqueo(value.name, value.observacion)
      .subscribe(data => {
        console.log(data);
        this.alertController.create({
          title: 'Ingresado',
          message: 'Bloqueo ingresado Correctamente',
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
