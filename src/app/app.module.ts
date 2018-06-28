import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertsPage, 
    ActionSheetsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    DatetimesPage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingsPage,
    ModalsPage,
    NavigationsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertsPage, 
    ActionSheetsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    DatetimesPage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingsPage,
    ModalsPage,
    NavigationsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
