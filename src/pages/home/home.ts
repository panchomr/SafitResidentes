import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  perfil : any;
  nombre : any;
  admin: any;
  residente :any;
  conserje:any;
  constructor(public navCtrl: NavController) {
    this.nombre = window.localStorage.getItem('Nombre');
    this.perfil = window.localStorage.getItem('idPerfil');

    if (this.perfil =='3') {
      this.residente = this.perfil;
    }
    
    if (this.perfil =='1') {
      this.admin = this.perfil;
    }
    
    if (this.perfil =='2') {
      this.conserje = this.perfil;
    }
  }


}
