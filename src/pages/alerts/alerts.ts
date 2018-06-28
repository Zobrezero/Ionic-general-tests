import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams, 
	AlertController,
} from 'ionic-angular';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage
{
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
    )
  {}

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad AlertsPage');
  }

  showAlert()
  {
    const alert = this.alertCtrl.create(
    {
      title: 'Nuevo amigo!',
      subTitle: 'Tú amigo, Obi wan Kenobi, ha aceptado tu solicitud de amistad!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt()
  {
    const prompt = this.alertCtrl.create(
    {
      title: 'Inicio de sesión',
      message: "Ingresa un nomre para el nuevo álbum",
      inputs:
      [
        {
          name: 'title',
          placeholder: 'Título'
        },
      ],
      buttons:
      [
        {
          text: 'cancelar',
          handler: data =>
          {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'guardar',
          handler: data =>
          {
            console.log('Saved clicked');
          }
        },
      ]
    });
    prompt.present();
  }

  showConfirm()
  {
    const confirm = this.alertCtrl.create(
    {
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons:
      [
        {
          text: 'Disagree',
          handler: () =>
          {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () =>
          {
            console.log('Agree clicked');
          }
        },
      ]
    });
    confirm.present();
  }

  showRadio()
  {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige un color');
    alert.addInput(
    {
      type: 'radio',
      label: 'Azúl',
      value: 'blue',
      checked: true
    });
    alert.addInput(
    {
      type: 'toggle',
      label: 'Rojo',
      value: 'red'
    });
    alert.addButton('Cancelar');
    alert.addButton(
    {
      text: 'OK',
      handler: data =>
      {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }

  showCheckbox()
  {
    let alert = this.alertCtrl.create();
    alert.setTitle('Que planetas has visitado?');
    alert.addInput(
    {
      type: 'checkbox',
      label: 'Mercurio',
      value: 'value1',
      checked: true
    });
    alert.addInput(
    {
      type: 'checkbox',
      label: 'Venus',
      value: 'value2'
    });
    alert.addButton('Cancelar');
    alert.addButton(
    {
      text: 'Ok',
      handler: data =>
      {
        console.log('Checkbox data:', data);
        // this.testCheckboxOpen = false;
        // this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
}
