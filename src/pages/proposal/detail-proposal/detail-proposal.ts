import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NavController, NavParams, ToastController, Content } from 'ionic-angular';
import { Message } from '../../../models/message';
import { PersistenceProvider } from '../../../providers/persistence/persistence';
import { AuthProvider } from '../../../providers/auth/auth';


@Component({
  selector: 'page-detail-proposal',
  templateUrl: 'detail-proposal.html',
})
export class DetailProposalPage implements OnInit, AfterViewChecked {
  

  @ViewChild(Content) content: Content;

  message: Message = new Message()
  messages : Array<any>;
  currentProposal
  auxObject
  key
  DOM: boolean

  contentBuild : boolean

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private persistence: PersistenceProvider,
    private toastCtrl: ToastController,
    private auth: AuthProvider
  ) {
    this.key = navParams.get('key')
    this.message.author = this.auth.currentUser['name']
  }

  async ngOnInit() {
    
    this.currentProposal = await this.persistence.getById('proposal', this.key)
    if(this.currentProposal.messages){
      this.messages = await this.currentProposal.messages
    }else{
      this.currentProposal.messages = await this.messages
    }
    this.DOM = true;
    this.auxObject = this.currentProposal
    
  }

  ngAfterViewChecked(): void {
    if(this.content){
      this.content.resize();
      this.scrollToBottom()
    }
  }
  
  
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
        this.contentBuild = true
      }
    }, 400)
  }


  onFocus() {
    this.content.resize();
    this.scrollToBottom();
  }

  refresh(){
    this.getProposal()
  }

  async getProposal() {
    this.currentProposal = await this.persistence.getById('proposal', this.key)
    this.messages = this.currentProposal.messages
    this.message = new Message()
    this.message.author = this.auth.currentUser['name']
    
  }
  /**
   * Method for send message in proposal
   */
  async sendMessage() {
    if(this.message.body != ''){
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' })
          this.message.date = new Date().toDateString()
          let auxObject = this.currentProposal
          auxObject.messages.push(this.message)
          this.scrollToBottom();
    
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
