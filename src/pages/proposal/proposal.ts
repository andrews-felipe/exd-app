import { Component , OnInit} from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { DetailProposalPage } from './detail-proposal/detail-proposal';
import { Observable } from 'rxjs';



@Component({
  selector: 'page-proposal',
  templateUrl: 'proposal.html',
})
export class ProposalPage implements OnInit {

  proposals =  [
    {type : 'Logotipo', title : 'Adriano Marques', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.'},
    
    {type : 'Branding', title : 'Vinicius Ramos', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.'},
  ]

  proposalList

  constructor(public navCtrl: NavController, 
              private auth : AuthProvider, 
              private persistence : PersistenceProvider
              ) {
  
  }

  ngOnInit(){
    if(this.auth.currentUser['type']){
      console.log(this.persistence.getAll('proposal').subscribe(
        res=>{
          console.log('entrei')
        }
      ))
      
    // }else{
    //   this.proposalList = this.persistence.getByUid('proposal', this.auth.currentUser['uid'])
    //   console.log(this.proposalList)
    // }
    }
  }

  goProposal(item){
      this.navCtrl.push(DetailProposalPage, item);
  }

 

}
