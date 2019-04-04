import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the PushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushProvider {

  constructor(public http: HttpClient,
              private oneSignal: OneSignal,
              private platform: Platform) {

    console.log('Hello PushProvider Provider');
  }

  inicializarNotificaciones() {
    if (this.platform.is('cordova')) {
      // OneSignal AppID| idRemitente Firebase
      this.oneSignal.startInit('faf963cc-be54-4a6a-8503-4b9926804268', '429065342134');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe((data) => {
        // do something when a notification is opened
        let objPush:any;
        objPush = data;
        console.log(objPush);
      });

      this.oneSignal.endInit();
    } else {
      console.log('estoy en el navegador web');
    }

  }

}
