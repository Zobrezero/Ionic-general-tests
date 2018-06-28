import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

/**
 * Generated class for the GesturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage
{
  public taps: number = 0;
  public presses: number = 0;
  public pans: number = 0;
  public swipes: number = 0;
  public rotates: number = 0;
  public pinches: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    )
  {}

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad GesturesPage');
  }

  tapEvent(event)
  {
    this.taps++;
  }

  pressEvent(event)
  {
    this.presses++;
  }

  panEvent(event)
  {
    this.pans++;
  }

  swipeEvent(event)
  {
    this.swipes++;
  }

  rotateEvent(event)
  {
    this.rotates++;
  }

  pinchEvent(event)
  {
    this.pinches++;
  }
}