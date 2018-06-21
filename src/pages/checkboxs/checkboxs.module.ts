import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckboxsPage } from './checkboxs';

@NgModule({
  declarations: [
    CheckboxsPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckboxsPage),
  ],
})
export class CheckboxsPageModule {}
