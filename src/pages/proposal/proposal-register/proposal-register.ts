import { PersistenceProvider } from './../../../providers/persistence/persistence';
import { Proposal } from './../../../models/proposal';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
//import { NavController, NavParams } from 'ionic-angular';


/**
 * @author Mateus Lourenco
 */

@Component({
  selector: 'page-proposal-register',
  templateUrl: 'proposal-register.html',
})

export class ProposalRegisterPage {

  newProposal: Proposal = new Proposal();


  constructor(private navCtrl: NavController, private navParams: NavParams, private persistence: PersistenceProvider) {
  
    
    /***
     * Receiving type of service.
     */
    this.newProposal.type = this.navParams.data 
  }


  registerProposal() {

  }


  validateProposal(){
    
  }

  

}
