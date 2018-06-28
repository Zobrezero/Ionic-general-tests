import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AlertsPage } from '../pages/alerts/alerts';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckboxsPage } from '../pages/checkboxs/checkboxs';
import { DatetimesPage } from '../pages/datetimes/datetimes';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { LoadingsPage } from '../pages/loadings/loadings';
import { ModalsPage } from '../pages/modals/modals';
import { NavigationsPage } from '../pages/navigations/navigations';

@Component(
{
  templateUrl: 'app.html'
})
export class MyApp
{
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
    )
  {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages =
    [
      { title: 'Home', component: HomePage },
      { title: 'Action Sheets', component: ActionSheetsPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Badges', component: BadgesPage },
      { title: 'Buttons', component: ButtonsPage },
      { title: 'Cards', component: CardsPage },
      { title: 'Checkboxs', component: CheckboxsPage },
      { title: 'Datetimes', component: DatetimesPage },
      { title: 'FABs', component: FabsPage },
      { title: 'Gestures', component: GesturesPage },
      { title: 'Grid', component: GridPage },
      { title: 'Icons', component: IconsPage },
      { title: 'Inputs', component: InputsPage },
      { title: 'Lists', component: ListsPage },
      { title: 'Loadings', component: LoadingsPage },
      { title: 'Modals', component: ModalsPage },
      { title: 'Navigations', component: NavigationsPage },
    ];
  }

  initializeApp()
  {
    this.platform.ready().then(() =>
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page)
  {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}