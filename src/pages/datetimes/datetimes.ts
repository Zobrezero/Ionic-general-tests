import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

/**
 * Generated class for the DatetimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
  selector: 'page-datetimes',
  templateUrl: 'datetimes.html',
})
export class DatetimesPage
{
  public event =
  {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    )
  {}

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad DatetimesPage');
  }
}