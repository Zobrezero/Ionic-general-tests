import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
} from 'ionic-angular';
import { ModalContent } from './modals-contents';


/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage
{
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
    )
  {}

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ModalsPage');
  }

  openModal(characterNum)
  {
    let modal = this.modalCtrl.create(ModalContent, characterNum);
    modal.present();
  }
}