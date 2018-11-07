import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, Content } from 'ionic-angular';
import { Proposal } from '../../../models/proposal';
import { Message } from '../../../models/message';
import { PersistenceProvider } from '../../../providers/persistence/persistence';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../../providers/auth/auth';


@Component({
  selector: 'page-detail-proposal',
  templateUrl: 'detail-proposal.html',
})
export class DetailProposalPage implements OnInit {

  @ViewChild('content') content:any;

  message: Message = new Message()
  messages
  currentProposal
  auxObject
  key
  DOM: boolean

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private persistence: PersistenceProvider,
    private toastCtrl: ToastController,
    private auth: AuthProvider
  ) {
    this.key = navParams.get('key')
    this.message.author = this.auth.currentUser['name']
  }


  ionViewDidEnter(){
    console.log('aqui')
    this.content.scrollToBottom(100);//300ms animation speed
  }


  async ngOnInit() {
    this.currentProposal = await this.persistence.getById('proposal', this.key)
    this.messages = this.currentProposal.messages
    this.DOM = true;
    this.auxObject = this.currentProposal
  }

  async getProposal() {
    this.currentProposal = await this.persistence.getById('proposal', this.key)
    this.messages = this.currentProposal.messages
    this.message = new Message()
    
  }
  /**
   * Method for send message in proposal
   */
  async sendMessage() {
    
    if(this.message.body !== undefined && this.message.body !== ''){
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' })
          this.message.date = new Date().toDateString()
          let auxObject = this.currentProposal
          auxObject.messages.push(this.message)
          this.persistence.put('proposal', auxObject).then(
            () => {
              this.getProposal()
            }
          ).catch(
            () => {
              toast.setMessage('Algum erro inesperado ocorreu!')
              toast.present()
            }
          )
     }
  }



}
