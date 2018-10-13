import { PersistenceProvider } from './../../../providers/persistence/persistence';
import { Service } from './../../../models/service';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-service-register',
  templateUrl: 'service-register.html',
  })
export class ServiceRegisterPage {

  /**
   * Instance of new Service for system
   */
  newService: Service = new Service();
  

  constructor(private navCtrl: NavController,
              private toastCtrl: ToastController,
              private persistence: PersistenceProvider,
              private navParams : NavParams
            ) {
    
    /***
     * Receiving type of service.
     */
    this.newService.title = this.navParams.data  
  }
  /**
   * Method for validate and save service in database
   */
  registerService(){
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});
    
    if(this.newService.title && this.newService.description && this.newService.imageUrl){
      this.persistence.post('services', this.newService)
      .then(()=>{
          toast.setMessage('Serviço Cadastrado com sucesso!');
          toast.present();
      })
    }else{
      toast.setMessage('Todos os campos devem ser preenchidos');
      toast.present();
    }
  }
}