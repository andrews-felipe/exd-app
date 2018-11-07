import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { PersistenceProvider } from '../../providers/persistence/persistence';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {

    user: User = new User();
    loginPage: LoginPage = new LoginPage(this.navCtrl, this.toastCtrl, this.authService);
    disabled: boolean = true;

    pageTitle : string

    constructor(public navCtrl: NavController,
        private toastCtrl: ToastController,
        private authService: AuthProvider,
        private persistence: PersistenceProvider
    ) {
    }
    /**
     * Define user default
     */
    ngOnInit() {
        if (this.authService.currentUser) {
            this.user = this.authService.currentUser as any
            this.pageTitle = 'Alterar Dados'
        } else {
            this.user.type = false;
            this.pageTitle = 'Cadastro'
        }

    }
    /**
     *  Create user in database of system
     */
    signUp() {
        if (this.disabled) {

            this.disabled = false;

            let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

            if (this.authService.currentUser) {
                this.persistence.put('user', this.user).then(
                    () => {
                        toast.setMessage('Alteração feita com sucesso!');
                        this.persistence.getByUid('user', this.authService.currentUser['uid']);
                        toast.present();
                        this.authService.logout()
                        this.navCtrl.push(LoginPage);
                        
                    }
                )
            }
            else {
                this.authService.singUpUser(this.user)
                    .then((user: any) => {
                        user.sendEmailVerification();
                        toast.setMessage('Usuário criado com sucesso.');
                        toast.present();
                        this.navCtrl.setRoot(LoginPage);
                    })
                    .catch((error: any) => {

                        if (error.code == 'auth/email-already-in-use') {
                            toast.setMessage('O e-mail digitado já está em uso.');
                        }
                        else if (error.code == 'auth/invalid-email') {
                            toast.setMessage('O e-mail digitado não é valido.');
                        }
                        else if (error.code == 'auth/operation-not-allowed') {
                            toast.setMessage('Não está habilitado criar usuários.');
                        }
                        else if (error.code == 'auth/weak-password') {
                            toast.setMessage('A senha digitada é muito fraca.');
                        }
                        toast.present();
                    });
            }
        }
    }
}


