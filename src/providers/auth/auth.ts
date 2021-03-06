import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from "../../usuario.interface";


@Injectable()
export class AuthProvider {

  private url ='http://safit.cl/v1/api'
  private urlLocal = 'https://localhost:44376/api'

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  validarUsuario(rut:string){
    
    return this.http.post(this.url + '/Validar',{rut});
  }

  registrarUsuario(user:Usuario){
    


    return this.http.post<Usuario>(this.url+'/Registrar',user);
  }

}
