import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { PortifolioItem } from '../../models/portifolio';
import { AuthProvider } from '../../providers/auth/auth';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { Observable } from 'rxjs';
import { PortfolioRegisterPage } from './portfolio-register/portfolio-register';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  /***
   * Mocks
   */
    portfolio : Array<PortifolioItem> = [
    {key : '', title : 'Consciência Cristã Branding', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.', imageUrl : '../../assets/imgs/imagem_portfolio.jpg'},
    
    {key : '', title : 'Consciência Cristã Branding', description : 'Gestão de branding do evento da consciência cristã,um evento sediado em Campina Grande comgrande estrutura.', imageUrl : 'http://2.bp.blogspot.com/-1gRHjJ3zVBs/WjFi8iHgDnI/AAAAAAAAEJI/QV_-dE3QuKkk1NtUasuv7jdunnysP-r_ACK4BGAYYCw/s1600/ifood-732540.png'},
  ];


  portfolioItens : Observable<any>
  
  constructor(public navCtrl: NavController, 
              private auth : AuthProvider, 
              private persistece : PersistenceProvider) {
  }

  getPortfolio(){
    this.portfolioItens = this.persistece.getAll('portfolio')
  }

  refresh(){
    this.getPortfolio()
  }
  
  create(){
    this.navCtrl.push(PortfolioRegisterPage)
  }
  

}
