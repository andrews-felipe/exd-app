import { PersistenceProvider } from './../../providers/persistence/persistence';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProposalPage } from '../proposal/proposal';


@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  allServices : Array<any> = new Array<any>();
  
  constructor(private navCtrl: NavController, private navParams: NavParams, private persistence: PersistenceProvider){
    
  }

  ngOnInit(){
    this.persistence.getAll('services').forEach((item)=>{
      this.allServices.push(item)
    })
  }

  goProposal(currentService){
      this.navCtrl.push(ProposalPage, currentService)
  }

}
