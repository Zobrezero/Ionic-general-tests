import { Component } from '@angular/core';
import {
	IonicPage,
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';

/**
 * Generated class for the LoadingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
  selector: 'page-loadings',
  templateUrl: 'loadings.html',
})
export class LoadingsPage
{
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController)
  {}

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad LoadingsPage');
  }

  presentLoading(event)
  {
    const loader = this.loadingCtrl.create(
    {
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}