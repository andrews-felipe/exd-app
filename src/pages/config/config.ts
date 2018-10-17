import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PasswordResetPage } from '../password-reset/password-reset';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changePassword(){
    this.navCtrl.push(PasswordResetPage)
  }

  changeInfo(){
    this.navCtrl.push(SignupPage)
  }

}
