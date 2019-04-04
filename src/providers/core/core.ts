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

  private url ='http://safitdp-001-site1.htempurl.com/v1/api'
  private urlLocal = 'https://localhost:44376/api'

  constructor(public http: HttpClient) {
    console.log('Hello CoreProvider Provider');
  }

  ingresarSolicitudEspacioComun(solicitud: EspaciosComunes){
    return this.http.post(this.url+'/SolicitarEspacioComun',solicitud);
  }

}
