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

    /**
     * @Ayrton
     * Para esse componente eu preciso da validação dos campos, se o objeto usuário está 
     * realmente preenchido, se o usuário digitar vazio quero que mostre uma mensagem. Então
     * a regra é se o usuário digitou email e senha o fluxo de leva-lo para o service é válido
     * caso não é exibido uma mensagem
     * 
     * Testar essa tela, e observar se o fluxo de mensagens está realmente funcionando
     */

    constructor (public navCtrl: NavController, private  toastCtrl: ToastController, private authService: AuthProvider) {
        this.user.email = 'ferulip@gmail.com'
        this.user.password = 'admadm'
    }
    

    login() {
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

    pushPage(view){
        if(view === 'sign'){this.navCtrl.push(SignupPage)}
        else if(view === 'reset'){this.navCtrl.push(PasswordResetPage)}
    }
}
