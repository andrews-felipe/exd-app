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

/**
 * 
 */
/**
   * @Humberto 
   * 
   * Criar um Objeto Proposta aqui, fazer a validação do mesmo, a proposta deve conter no mínimo 
   *  200 caracteres, e o título 20 caracteres
   * 
   *  criar os métodos de validação e envio da proposta para o service persistencia, no objeto
   *  deve também está incluido o uid do usuário, que pode ser acessado no service auth atributo currentUser
   *  
   *  
   */


export class ProposalRegisterPage {

  newProposal: Proposal = new Proposal();


  constructor(private navCtrl: NavController, private navParams: NavParams, private persistence: PersistenceProvider) {
  }


  registerProposal() {

  }


  validateProposal(){
    
  }

  

}
