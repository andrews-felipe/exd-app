import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { PasswordResetPage } from '../password-reset/password-reset';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    user: User = new User();
    @ViewChild('form') form: NgForm;

    constructor (public navCtrl: NavController, private  toastCtrl: ToastController, private authService: AuthProvider) {

    }

    createAccount() {
        this.navCtrl.push(SignupPage);
    }

    resetPassword() {
         this.navCtrl.push(PasswordResetPage);
     }

    signIn() {

        if(this.form.form.valid) {
                
            this.authService.authLoginValidate(this.user)
            .then(() => {
                this.navCtrl.setRoot(HomePage);
            })
            .catch((error: any) => {

                let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});

                if(error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                } 
                else if(error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                } 
                else if(error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                } 
                else if(error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
        
    }

}
