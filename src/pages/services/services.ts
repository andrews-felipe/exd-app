import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
=======
import { Service } from '../../models/service';
import { AuthProvider } from '../../providers/auth/auth';
>>>>>>> bd8674aa8d1ed70a6e762f4c76c3f6178ba55d77


@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  constructor(private navCtrl: NavController, private navParams: NavParams){
    
  }

}
