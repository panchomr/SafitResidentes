import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspaciosComunes } from '../../espacioscomunes.interface';

/*
  Generated class for the CoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoreProvider {

  private url ='http://safit.cl/v1/api'
  private urlLocal = 'https://localhost:44376/api'

  constructor(public http: HttpClient) {
    console.log('Hello CoreProvider Provider');
  }

  ingresarSolicitudEspacioComun(solicitud: EspaciosComunes){
    return this.http.post(this.url+'/SolicitarEspacioComun',solicitud);
  }

  ingresarBloqueo(nombreBloqueado:string,observacion:string){
    let numeroDepartamento = window.localStorage.getItem('NumeroDepartamento');
    return this.http.post(this.url + '/IngresarBloqueo',{nombreBloqueado,observacion,numeroDepartamento});
  }

  getBloqueos(){
    return this.http.get(this.url + '/GetBloqueos');
  }

  desbloquear(id:any){
    return this.http.post(this.url + '/DesbloquearPersona',id);
  }

}
