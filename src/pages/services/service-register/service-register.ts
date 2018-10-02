import { Service } from './../../../models/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ServiceRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-service-register',
  templateUrl: 'service-register.html',
})

export class ServiceRegisterPage {

  newService: Service = new Service();


  constructor(private navCtrl: NavController, private navParams: NavParams,private persistence: PersistenceService) {
  }

  registerService(){
    if(this.newService.title != null && this.newService.description != null 
      && this.newService.imageUrl){

      //this.persistence
      
    }
  }

}
