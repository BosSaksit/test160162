import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckbillPage } from './checkbill';

@NgModule({
  declarations: [
    CheckbillPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckbillPage),
  ],
})
export class CheckbillPageModule {}
