import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PersistenceProvider } from '../../providers/persistence/persistence';



@Component({
  selector: 'page-proposal',
  templateUrl: 'proposal.html',
})
export class ProposalPage {
  /**
   * @Humberto 
   * 
   * Criar um Objeto Proposta aqui, fazer a validação do mesmo, a proposta deve conter no mínimo 
   *  200 caracteres, e o título 20 caracteres
   * 
   *  criar os métodos de validação e envio da proposta para o service persistencia, no objeto
   *  deve também está incluido o uid do usuário, que pode ser acessado no service auth atributo currentUser
   *  
   *  @Ayrton
   *  
   * Criar método e fluxo de anexar imagem, usar a biblioteca nativa do ionic, e enviar para 
   * o service database, método upload.
   *  
   *  
   */
  constructor(public navCtrl: NavController, private auth : AuthProvider, private database : PersistenceProvider) {
  }

 

}
