import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Proposal } from '../../../models/proposal';
import { Message } from '../../../models/message';
import { PersistenceProvider } from '../../../providers/persistence/persistence';


@Component({
  selector: 'page-detail-proposal',
  templateUrl: 'detail-proposal.html',
})
export class DetailProposalPage {

  message : Message = new Message()

  currentProposal : Proposal = new Proposal

  proposal =  [
    { type : 'Logotipo', 
      title : 'Adriano Marques', 
      description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.',
      messages : [{author : 'Administrador', body : 'Um evento sediado em Campina Grande comgrande estrutura.', data : new Date}]
    },
  ]
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private persistence: PersistenceProvider,
              private toastCtrl: ToastController,
              ) {
  }

  sendMessage(){
    let toast = this.toastCtrl.create({duration : 3000, position : 'bottom'})
    let auxObject : Proposal
    Object.assign(this.currentProposal, auxObject)
    auxObject.messages.push(this.message)
    this.persistence.put('proposal', auxObject).then(
      ()=>{
        this.currentProposal.messages.push(this.message)
        this.message = new Message()
      }
    ).catch(
      err=>{
        toast.setMessage('Algum erro inesperado ocorreu!')
        toast.present()
      }
    )
  }

  

}
