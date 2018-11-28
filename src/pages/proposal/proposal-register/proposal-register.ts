import { PersistenceProvider } from './../../../providers/persistence/persistence';
import { Proposal } from './../../../models/proposal';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { GalleryProvider } from '../../../providers/gallery/gallery';
import { ToastController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';


/**
 * @author Felipe Andrew
 */

@Component({
  selector: 'page-proposal-register',
  templateUrl: 'proposal-register.html',
})

export class ProposalRegisterPage {

  newProposal: Proposal = new Proposal();
  imgCurrent

  constructor(private toastCtrl: ToastController,
              private navParams: NavParams, 
              private persistence: PersistenceProvider,
              private img : GalleryProvider, 
              private auth : AuthProvider
              ) {

    /***
     * Receiving type of service.
     */
    this.newProposal.type = this.navParams.get('data')

    /**
     * Get the uid of current user
     */
    this.newProposal.uid = this.auth.currentUser['uid'] 
  }

  async addImage(){
    this.imgCurrent = await this.img.getPicture();
    this.newProposal.imageUrl = await this.persistence.upload(this.imgCurrent)
  }

  /***
   * Method for sending a proposal
   */
  async sendProposal(){
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});
    if(this.newProposal.title && this.newProposal.description){
        this.persistence.post('proposal', this.newProposal)
        .then(()=>{
          toast.setMessage('Proposta Enviada! Acompanhe no Menu "Propostas"');
          toast.present();
      })
    }else{
      toast.setMessage('Todos os campos devem ser preenchidos');
      toast.present();
  }
}

  

}
