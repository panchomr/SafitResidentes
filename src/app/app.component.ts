import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { BeneficiosPage } from "../pages/beneficios/beneficios";
import { TabsPage } from "../pages/tabs/tabs";
import { RegistroPage } from '../pages/registro/registro';
import { MiHogarPage } from '../pages/mi-hogar/mi-hogar';
import { SeguridadPage } from '../pages/seguridad/seguridad';
import { EspaciosComunesPage } from '../pages/espacios-comunes/espacios-comunes';
import { GastosComunesPage } from '../pages/gastos-comunes/gastos-comunes';
import { PushProvider } from "../providers/push/push";
import { BloqueosPage } from '../pages/bloqueos/bloqueos';
//import { ListabloqueosPage } from '../pages/listabloqueos/listabloqueos';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  beneficios = BeneficiosPage;
  tab = TabsPage;
  home = HomePage;
  perfil : any;
  nombre : any;
  admin: Boolean=false;
  residente :Boolean=false;
  conserje:Boolean=false;
  bloqueos = BloqueosPage;
  
  pages :any[]=[];
  @ViewChild(Nav) nav: Nav;


  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              public notificationProvider:PushProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //llamamos al metodo que inicializa los push desde mi provider

      this.notificationProvider.inicializarNotificaciones();
    });
    this.pages =[
      {title:'Menú Principal', component:TabsPage,visible:true},
      {title:'Mi Perfil', component:RegistroPage,visible:true},
      {title:'Mi Hogar', component:MiHogarPage,visible:true},
      {title:'Seguridad', component:SeguridadPage,visible:true},
      {title:'Lista Visitas Bloqueadas', component:BloqueosPage,visible:true},
      {title:'Espacios Comunes', component:EspaciosComunesPage,visible:true},
      {title:'Gastos Comunes', component:GastosComunesPage,visible:true},
      {title:'Beneficios y Descuentos', component:BeneficiosPage,visible:true}
      
    ];
  }
  abrirarPagina( pagina: any){

    this.nav.setRoot(pagina.component);
    this.menuCtrl.close();

  }
 
}

