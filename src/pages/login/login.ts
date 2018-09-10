import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();
    @ViewChild('form') form: NgForm;

    constructor (public navCtrl: NavController, private  toastCtrl: ToastController, private authService: AuthService) {

    }

    createAccount() {
        this.navCtrl.push(SignupPage);
    }

    resetPassword() {
        this.navCtrl.push(ResetpasswordPage);
    }

    signIn() {

        if(this.form.form.valid) {
                
            this.authService.signIn(this.user)
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