import { PersistenceProvider } from './../../../providers/persistence/persistence';
import { Proposal } from './../../../models/proposal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  }

  createProposal(){
    if(this.newProposal != null){
      if(this.newProposal.idUser != null, this.newProposal.desc != null, this.newProposal.date != null, this.newProposal.title){
        this.persistence.post("/orcamento", this.newProposal);
        console.log("Novo orçamento cadastrado com sucesso!");  
      }
    }
  }

  readAllProposal(){
    if(this.newProposal != null){
      this.persistence.getAll("/orcamento");
    }  
    else{
      console.log("Você está sem orçamentos :/");
    }
  }

  readProposal(){
    if(this.newProposal != null){
      this.persistence.get("/orcamento/id",this.newProposal.idUser);
    }
    else {
      console.log("O Orçamento não existe :/");
    }
  }

  deleteProposal(){
    if(this.newProposal.idUser != null){
      this.persistence.remove(this.newProposal.idUser,"/orcamento/id");
      console.log("Orçamento removido com Sucesso!");
    }
    else {
      console.log("Orçamento inválido!");
    }
  }

}
