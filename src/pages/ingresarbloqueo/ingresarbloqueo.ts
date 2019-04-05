import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  bloqueos: any[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
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
    this.bloqueos.push(
      {
        'nombreBloqueo': value.name,
        'observacion':value.observacion
      }
    );

  }

}
