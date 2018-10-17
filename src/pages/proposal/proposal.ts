import { Component , OnInit} from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { DetailProposalPage } from './detail-proposal/detail-proposal';
import { Observable } from 'rxjs';
import { Proposal } from '../../models/proposal';



@Component({
  selector: 'page-proposal',
  templateUrl: 'proposal.html',
})
export class ProposalPage implements OnInit {

  // proposals =  [
  //   {type : 'Logotipo', title : 'Adriano Marques', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.'},
    
  //   {type : 'Branding', title : 'Vinicius Ramos', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.'},
  // ]

  proposalList

  constructor(public navCtrl: NavController, 
              private auth : AuthProvider, 
              private persistence : PersistenceProvider
              ) {
  
  }

  async ngOnInit(){
    if(this.auth.currentUser['type']){
      this.proposalList = await this.persistence.getAll('proposal')
     
    }else{
      this.proposalList = await this.persistence.getByUid('proposal', this.auth.currentUser['uid'])
  
    }
  }
  
  
  goProposal(item){
    
      // this.navCtrl.push(DetailProposalPage, { data : item , messages : item.messages});

      this.navCtrl.push(DetailProposalPage, { key : item.key });
  }

 

}
