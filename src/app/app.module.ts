import { PersistenceProvider } from './../providers/persistence/persistence';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { firebaseconfig } from '../firebaseconfig';
import { ServicesPage } from '../pages/services/services';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { ServiceRegisterPage } from '../pages/services/service-register/service-register';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { LoginPage } from '../pages/login/login';
import { ProposalRegisterPage } from '../pages/proposal/proposal-register/proposal-register';
import { ProposalPage } from '../pages/proposal/proposal';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { ConfigPage } from '../pages/config/config';
import { SignupPage } from '../pages/signup/signup';
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { PortfolioRegisterPage } from '../pages/portfolio/portfolio-register/portfolio-register';
import { GalleryProvider } from '../providers/gallery/gallery';
import { Camera } from '@ionic-native/camera';
import { DetailProposalPage } from '../pages/proposal/detail-proposal/detail-proposal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    PortfolioPage,
    ServiceRegisterPage,
    ProposalPage,
    ProposalRegisterPage,
    ConfigPage,
    SignupPage,
    PasswordResetPage,
    PortfolioRegisterPage,
    ProposalRegisterPage,
    DetailProposalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    ServiceRegisterPage,
    PortfolioPage,
    ProposalPage,
    ProposalRegisterPage,
    ConfigPage,
    SignupPage,
    PasswordResetPage,
    PortfolioRegisterPage,
    ProposalRegisterPage,
    DetailProposalPage
  ],
  providers: [
    AuthProvider,
    PersistenceProvider,
    StatusBar,
    SplashScreen,
   { provide: ErrorHandler, useClass: IonicErrorHandler },
    GalleryProvider,
    Camera

  ]
})
export class AppModule { }
