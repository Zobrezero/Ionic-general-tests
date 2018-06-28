import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationsPage } from './navigations';

@NgModule({
  declarations: [
    NavigationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationsPage),
  ],
})
export class NavigationsPageModule {}
