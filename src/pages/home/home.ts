import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProposalPage } from '../proposal/proposal';
import { ConfigPage } from '../config/config';
// import { InAppBrowser, AppAvailability, Device } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }
  /**
   * Method for navigate in views
   * @param view 
   */
  pushPage(view){
    if(view === 'service'){ this.navCtrl.push(ServicesPage)}
    else if(view === 'portfolio'){ this.navCtrl.push(PortfolioPage)}
    else if(view === 'proposal'){ this.navCtrl.push(ProposalPage)}
    else if(view === 'config'){ this.navCtrl.push(ConfigPage)}
  }

  // launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
  //   let app: string;
  //   if (Device.device.platform === 'iOS') {
  //     app = iosSchemaName;
  //   } else if (Device.device.platform === 'Android') {
  //     app = androidPackageName;
  //   } else {
  //     let browser = new InAppBrowser(httpUrl + username, '_system');
  //     return;
  //   }
  
  //   AppAvailability.check(app).then(
  //     () => { // success callback
  //       let browser = new InAppBrowser(appUrl + username, '_system');
  //     },
  //     () => { // error callback
  //       let browser = new InAppBrowser(httpUrl + username, '_system');
  //     }
  //   );
  // }
  
  // openInstagram(username: string) {
  //   this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  // }
  
  // openTwitter(username: string) {
  //   this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  // }
  
  // openFacebook(username: string) {
  //   this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
  // }

}
