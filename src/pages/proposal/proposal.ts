import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { Proposal } from '../../models/proposal';



@Component({
  selector: 'page-proposal',
  templateUrl: 'proposal.html',
})
export class ProposalPage {

  Proposal = new Proposal;

  proposals =  [
    {key : '', title : 'Adriano Marques', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.'},
    
    {key : '', title : 'Vinicius Ramos', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.'},
  ]

  constructor(public navCtrl: NavController, 
              private auth : AuthProvider, 
              private persistence : PersistenceProvider,
              private navParams : NavParams
              ) {
  
  }

  ngOnInit(){
    if(this.auth.currentUser['type']){
      this.persistence.getAll('proposal')
    }else{
      this.persistence.getById('proposal', this.auth.currentUser['uid'])
    }
  }

  proposalValidation(){
    if(this.Proposal.title.length <= 20 && this.Proposal.desc.length <= 200){
      
    }
  }

  
  getProposals(){
    
  }

 

}
