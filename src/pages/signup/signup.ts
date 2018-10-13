import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: User = new User();

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private authService: AuthProvider) {
  }
  /**
   * Define user default
   */
  ngOnInit(){
      this.user.type = false;
  }
  /**
   *  Create user in database of system
   */
  signUp() {
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});

    this.authService.singUpUser(this.user)
        .then((user: any) => {
            user.sendEmailVerification();

            toast.setMessage('Usuário criado com sucesso.');
            toast.present();

            this.navCtrl.setRoot(LoginPage);
        })
        .catch((error: any) => {

            if(error.code == 'auth/email-already-in-use') {
                toast.setMessage('O e-mail digitado já está em uso.');
            }
            else if(error.code == 'auth/invalid-email') {
                toast.setMessage('O e-mail digitado não é valido.');
            }
            else if(error.code == 'auth/operation-not-allowed') {
                toast.setMessage('Não está habilitado criar usuários.');
            }
            else if(error.code == 'auth/weak-password') {
                toast.setMessage('A senha digitada é muito fraca.');
            }
            toast.present();
        });
    }
    
  }


