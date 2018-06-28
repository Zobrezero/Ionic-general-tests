import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

/**
 * Generated class for the CheckboxsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
  selector: 'page-checkboxs',
  templateUrl: 'checkboxs.html',
})
export class CheckboxsPage
{
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  	)
  {}

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad CheckboxsPage');
  }
}