import { PersistenceProvider } from './../../providers/persistence/persistence';
import { Component } from '@angular/core';
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
export class ServicesPage {
  
  services : Observable<any> = new Observable<any>()

  serviceList : Array<Service> = [
    {key : '', title : 'Logitipo', description : 'basics', imageUrl : 'http://www.ambientalbrazil.com.br/wp-content/uploads/img-Consultoria-em-Projetos-Ambiental.jpg'},
    {key : '', title : 'Logitipo', description : 'basics', imageUrl : 'http://www.ambientalbrazil.com.br/wp-content/uploads/img-Otimizacao-de-Sistemas.jpg'},
    {key : '', title : 'Logitipo', description : 'basics', imageUrl : 'http://www.ambientalbrazil.com.br/wp-content/uploads/img-Consultoria-em-Projetos-Ambiental.jpg'},
    {key : '', title : 'Logitipo', description : 'basics', imageUrl : 'http://www.ambientalbrazil.com.br/wp-content/uploads/img-Otimizacao-de-Sistemas.jpg'},
  ];
  
  constructor(private navCtrl: NavController, private persistence: PersistenceProvider, private auth : AuthProvider){
      
  }
  
  ngOnInit(){
    this.services = this.persistence.getAll('services')
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
