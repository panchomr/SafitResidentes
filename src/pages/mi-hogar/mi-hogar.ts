import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the MiHogarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-hogar',
  templateUrl: 'mi-hogar.html',
})
export class MiHogarPage {
  myForm: FormGroup;
  zone : any;
  modeKeys:any;
  prueba:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
    this.zone = {
      kind: '-Seleccione-'
    }
    this.modeKeys = [
      'Fuera de Casa',
      'No Molestar',
    ]           
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiHogarPage');
  }

  private createMyForm(){
    return this.formBuilder.group({
      ddlEstado:[this.zone, Validators.required],
      name: ['Francisco Muñoz', Validators.required],
      depto: ['1005', Validators.required],
      observacion: ['Estare fuera por vacaciones la unica persona Autorizada para ingresar es Sebastian Costa Rut 1-9', Validators.required],
      horaInicio: ['20:00', Validators.required],
      horaTermino: ['02:00', Validators.required],
      fechaSolicitud: ["01-11-2019", Validators.required]
      
      
    });
  }

  onSubmit(value:any){
    if (this.myForm.valid) {
      alert('datos Actualizados');
      console.log(value);
      
    }
  }

  onChange(evento:any){
    console.log('esto es el evento'+ evento);
     this.prueba = true;
  }

}
