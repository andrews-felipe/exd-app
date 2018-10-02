import { Service } from './../../../models/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-service-register',
  templateUrl: 'service-register.html',
  })
export class ServiceRegisterPage {

  newService: Service = new Service();

  constructor(private navCtrl: NavController, private navParams: NavParams,/*private persistence: PersistenceService*/) {
  }

  registerService(){
    if(this.newService.title != null && this.newService.description != null 
      && this.newService.imageUrl){
      //persistence.post(this.newService);
    }
  }

  listAllService(){
    return null;
    //return persistence.getAll();
  }

  updateService(){
    //persistence.put(this.newService);
  }

  removeService(){
    //persistence.delete(this.newService);
  }
  
}
