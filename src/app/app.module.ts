import { PersistenceProvider } from './../providers/persistence/persistence';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
//import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { firebaseconfig } from '../firebaseconfig';
import { ServicesPage } from '../pages/services/services';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { ServiceRegisterPage } from '../pages/services/service-register/service-register';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { ProposalRegisterPage } from '../pages/proposal/proposal-register/proposal-register';
import { ProposalPage } from '../pages/proposal/proposal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    PortfolioPage,
    ServiceRegisterPage,
    SettingsPage,
    ProposalPage,
    ProposalRegisterPage
  ],
  imports: [
    BrowserModule,
    //IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicImageViewerModule
  ],
  //bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    ServiceRegisterPage,
    PortfolioPage,
    SettingsPage,
    ProposalPage,
    ProposalRegisterPage
  ],
  providers: [
    AuthProvider,
    PersistenceProvider,
    StatusBar,
    SplashScreen,
   // { provide: ErrorHandler, useClass: IonicErrorHandler },

  ]
})
export class AppModule { }
