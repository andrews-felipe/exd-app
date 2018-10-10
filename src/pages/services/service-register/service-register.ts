import { PersistenceProvider } from './../../../providers/persistence/persistence';
import { Service } from './../../../models/service';
import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-service-register',
  templateUrl: 'service-register.html',
  })
export class ServiceRegisterPage {

  newService: Service = new Service();
  services: Array<any> = new Array<any>();

  constructor(private navCtrl: NavController, private navParams: NavParams,private persistence: PersistenceProvider) {
  }

  registerService(){
    if(this.newService.title != null && this.newService.description != null 
      && this.newService.imageUrl){
      this.persistence.post('services',this.newService);
    }
  }

  listAllService(){
    this.persistence.getAll('services').forEach((item)=>{
      this.services.push(item);
      
    });
  }

  removeService(){
    //this.persistence.remove(this.services, 'service');
  }
  
}