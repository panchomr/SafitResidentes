import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GastosComunesPage } from './gastos-comunes';

@NgModule({
  declarations: [
    GastosComunesPage,
  ],
  imports: [
    IonicPageModule.forChild(GastosComunesPage),
  ],
})
export class GastosComunesPageModule {}
