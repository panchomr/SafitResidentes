import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspaciosComunesPage } from './espacios-comunes';

@NgModule({
  declarations: [
    EspaciosComunesPage,
  ],
  imports: [
    IonicPageModule.forChild(EspaciosComunesPage),
  ],
})
export class EspaciosComunesPageModule {}
