import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ServicesPage } from '../pages/services/services';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { ProposalRegisterPage } from '../pages/proposal/proposal-register/proposal-register';
import { ProposalPage } from '../pages/proposal/proposal';
import { Platform } from 'ionic-angular/platform/platform';
import { ServiceRegisterPage } from '../pages/services/service-register/service-register';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ConfigPage } from '../pages/config/config';
import { DetailProposalPage } from '../pages/proposal/detail-proposal/detail-proposal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = DetailProposalPage;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

