import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from "../../usuario.interface";


@Injectable()
export class AuthProvider {

  private url ='http://safitdp-001-site1.htempurl.com/v1/api'
  private urlLocal = 'https://localhost:44376/api'

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  validarUsuario(rut:string){
    
    return this.http.post(this.urlLocal + '/Validar',{rut});
  }

  registrarUsuario(user:Usuario){
    


    return this.http.post<Usuario>(this.urlLocal+'/Registrar',user);
  }

}
