import { PersistenceProvider } from './../../../providers/persistence/persistence';
import { Proposal } from './../../../models/proposal';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * @author Mateus Lourenco
 */

@Component({
  selector: 'page-proposal-register',
  templateUrl: 'proposal-register.html',
})

/**
 * 
 */
export class ProposalRegisterPage {

  newProposal: Proposal = new Proposal();

  proposals;

  constructor(private navCtrl: NavController, private navParams: NavParams, private persistence: PersistenceProvider) {
  }

  registerProposal() {
    console.log(this.newProposal);
    this.persistence.post('proposta', this.newProposal);
  }

  listAllProposal() {
    this.persistence.getAll('proposta').subscribe(data => {
      this.proposals = data
    }).add(error => console.log(error));
  }

  deleteProposal() {
    if (this.newProposal !== null) {
      this.persistence.remove(this.proposals, 'proposta');
    }
  }

}
