import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ServicesPage } from '../pages/services/services';
import { PortfolioPage } from '../pages/portfolio/portfolio';
<<<<<<< HEAD
<<<<<<< HEAD
import { SettingsPage } from '../pages/settings/settings';
=======
import { ProposalRegisterPage } from '../pages/proposal/proposal-register/proposal-register';
>>>>>>> feature/view/model
=======
import { ProposalPage } from '../pages/proposal/proposal';
>>>>>>> feature/telaDePortfolio


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
<<<<<<< HEAD
  rootPage:any = SettingsPage;
=======
  rootPage:any = ProposalRegisterPage;
>>>>>>> feature/view/model
=======
  rootPage:any =  PortfolioPage;
>>>>>>> feature/telaDePortfolio

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

