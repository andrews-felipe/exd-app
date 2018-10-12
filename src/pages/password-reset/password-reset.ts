import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-password-reset',
  templateUrl: 'password-reset.html',
})
export class PasswordResetPage {

  userEmail: string = '';
 

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private authService: AuthProvider) {

  }

  resetPassword() {


        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});

        console.log('entrou')
        this.authService.resetPassword(this.userEmail)
            .then(() => {

                  toast.setMessage('Solicitação foi enviada para o seu e-mail.');
                  toast.present();

                  this.navCtrl.pop();
              })
              .catch((error: any) => {

                  if(error.code == 'auth/invalid-email') {
                      toast.setMessage('O e-mail digitado não é valido.');
                  }
                  else if(error.code == 'auth/missing-android-pkg-name') {
                      toast.setMessage('O nome do pacote não foi encontrado.');
                  }
                  else if(error.code == 'auth/missing-continue-uri') {
                      toast.setMessage('A URL não foi encontrada.');
                  }
                  else if(error.code == 'auth/missing-ios-bundle-id') {
                      toast.setMessage('O ID do pacote não foi encontrado.');
                  }
                  else if(error.code == 'auth/invalid-continue-uri') {
                      toast.setMessage('A URL fornecida é inválida.');
                  }
                  else if(error.code == 'auth/unauthorized-continue-uri') {
                      toast.setMessage('URL não autorizada.');
                  }
                  else if(error.code == 'auth/user-not-found') {
                      toast.setMessage('O usuário não foi encontrado.');
                  }
                  toast.present();
              });      

      
  }

}
