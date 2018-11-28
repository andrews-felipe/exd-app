import { PersistenceProvider } from './../../providers/persistence/persistence';
import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Service } from '../../models/service';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';
import { ServiceRegisterPage } from './service-register/service-register';
import { ProposalRegisterPage } from '../proposal/proposal-register/proposal-register';


@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage implements OnInit {
  
  servicesList
  constructor(private navCtrl: NavController, private persistence: PersistenceProvider, private auth : AuthProvider){
      this.ngOnInit()
  }
  
  async ngOnInit(){
    this.servicesList = await this.persistence.getAll('services')
  }
  /**
   * Method for go to page "Create Proposal" sending choised service.
   */
  goProposal(currentService){
      this.navCtrl.push(ProposalRegisterPage, {data : currentService.title})
  }

  create(){
    this.navCtrl.push(ServiceRegisterPage)
  }

}
