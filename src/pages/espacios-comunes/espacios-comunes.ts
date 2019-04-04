import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspaciosComunes } from "../../espacioscomunes.interface";
import { CoreProvider } from '../../providers/core/core';

/**
 * Generated class for the EspaciosComunesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espacios-comunes',
  templateUrl: 'espacios-comunes.html',
})
export class EspaciosComunesPage {
  zone : any;
  modeKeys:any;
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public coreService:CoreProvider,
              public alertController:AlertController) {
                this.myForm = this.createMyForm();

    this.zone = {
      kind: '-Seleccione-'
    }
    this.modeKeys = [
      'Salón de Eventos',
      'Quincho N°1',
      'Quincho N°2',
      'Quincho N°3',
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspaciosComunesPage');
  }

  private createMyForm(){
    return this.formBuilder.group({
      ddlEspacio:[this.zone, Validators.required],
      name: ['Francisco Muñoz', Validators.required],
      depto: ['1005', Validators.required],
      horaInicio: ['20:00', Validators.required],
      horaTermino: ['02:00', Validators.required],
      fechaSolicitud: ["01-11-2019", Validators.required]
      
      
    });
  }

  onSubmit(value:any){
    if (this.myForm.valid) {
      const solicitud:EspaciosComunes={
        NombreSolicitante: value.name,
        Departamento:value.depto,
        FechaSolicitada: value.fechaSolicitud,
        HoraInicio:value.horaInicio,
        HoraFin:value.horaTermino,
        EspacioSolicitado:value.ddlEspacio
      }

      this.coreService.ingresarSolicitudEspacioComun(solicitud)
        .subscribe(data =>{
          console.log(data);
          alert('Hemos Recibido Solicitud correctamente');
          this.myForm.reset();
        },
        error=>{
           console.log(error);
            this.alertController.create({
              title:'Error',
              message:error.error,
              buttons:["OK"]
            }).present();
        });
      
    }
  }

}


