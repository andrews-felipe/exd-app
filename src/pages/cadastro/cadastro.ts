
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { SignAuthService } from '../../providers/services-sign-auth';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private authService: SignAuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  createAccount() {
        
    if(this.form.form.valid) {

        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});

        this.authService.singUpUser(this.user)
            .then((user: any) => {
                user.sendEmailVerification();

                toast.setMessage('Usuário criado com sucesso.');
                toast.present();

                this.navCtrl.setRoot(HomePage);
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
}