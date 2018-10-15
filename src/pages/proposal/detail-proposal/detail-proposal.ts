import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Proposal } from '../../../models/proposal';
import { Message } from '../../../models/message';
import { PersistenceProvider } from '../../../providers/persistence/persistence';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../../providers/auth/auth';


@Component({
  selector: 'page-detail-proposal',
  templateUrl: 'detail-proposal.html',
})
export class DetailProposalPage {

  message : Message = new Message()

  currentProposal
  cd : string = new Date().toDateString()
  
  proposal  =  
    { type : 'Logotipo', 
      title : 'Adriano Marques', 
      date : this.cd,
      description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande com grande estrutura.',
      messages : [{author : 'Administrador', body : 'Um evento sediado em Campina Grande com grande estrutura.', date : this.cd}]
    }
    
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private persistence: PersistenceProvider,
              private toastCtrl: ToastController
              ) {

            this.currentProposal = this.navParams.data
  }

  async getProposal(){
    this.currentProposal =  await this.persistence.getById('proposal', this.currentProposal.key)
  }
  /**
   * Method for send message in proposal
   */
  sendMessage(){
    let toast = this.toastCtrl.create({duration : 3000, position : 'bottom'})
    let auxObject : Proposal
    Object.assign(this.currentProposal, auxObject)
    auxObject.messages.push(this.message)
    this.persistence.put('proposal', auxObject).then(
      ()=>{
        this.getProposal()
        this.message = new Message()
      }
    ).catch(
      ()=>{
        toast.setMessage('Algum erro inesperado ocorreu!')
        toast.present()
      }
    )
  }

  

}
