import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingsPage } from './loadings';

@NgModule({
  declarations: [
    LoadingsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingsPage),
  ],
})
export class LoadingsPageModule {}
