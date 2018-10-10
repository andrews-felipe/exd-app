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
    this.newProposal.title = 'cassio';
    this.newProposal.desc = 'isso não é um teste';
    this.newProposal.date = new Date();

  }

  // list() {
  //   console.log(this.proposals);
  // }

  createProposal() {
    console.log(this.newProposal);
    this.persistence.post('proposta', this.newProposal);
  }

  readAllProposal() {
    this.persistence.getAll('proposta').then(data => {
      console.log('entrou');
      this.proposals = data
      console.log(this.proposals);
    }).catch(error => console.log(error))
  }

  deleteProposal() {
    if (this.newProposal !== null) {
      this.persistence.remove(this.proposals, 'proposta');
      console.log('Proposta removida com Sucesso!');
    }
    else {
      console.log('Proposta inválida!');
    }
  }

}
