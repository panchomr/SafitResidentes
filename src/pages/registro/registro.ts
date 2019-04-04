import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Usuario } from "../../usuario.interface";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  myForm: FormGroup;
  zone : any;
  modeKeys:any;
  rut:any;
  condoro:any;
  usuario : Usuario;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public authService : AuthProvider) {

      

      this.zone = {
        kind: '-Seleccione-'
      }
      this.modeKeys = [
        {valor:1, texto:'Arrendatario'},
        {valor:2,texto:'Propietario'}
      ]
      console.log(this.navParams.data.Rut);
      this.rut = this.navParams.data.Rut; 
      
      this.myForm = this.createMyForm();

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  private createMyForm(){
    return this.formBuilder.group({
      idEntidad:[this.zone, Validators.required],
      nombre: ['', Validators.required],
      numeroDepartamento: ['', Validators.required],
      rut:[this.rut,Validators.required],
      email: ['', Validators.required],
      telefono:['',Validators.required],
      numeroBodega:[''],
      numeroEstacionamiento:['']

    });

    
  }

  onSubmit(value:any){
    if (this.myForm.valid) {
      const user :Usuario={
        Nombre:value.nombre,
        Rut:value.rut,
        Email:value.email,
        NumeroDepartamento:value.numeroDepartamento,
        NumeroBodega:value.numeroBodega,
        NumeroEstacionamiento:value.numeroEstacionamiento,
        Fono:value.telefono,
        IdEntidad:value.idEntidad,
        IdPerfil:3,
        IdCondominio:1
      }
      console.log('esta es la interfaz' + user);
     this.authService.registrarUsuario(user)
     .subscribe(data=>{
      console.log(data);
     },

     error =>{
       this.condoro = error.error;
       
     }
      );
      console.log(value);
      
    }
  }

}
