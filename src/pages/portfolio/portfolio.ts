import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { PortfolioItem } from '../../models/portfolio';
import { AuthProvider } from '../../providers/auth/auth';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { Observable } from 'rxjs';
import { PortfolioRegisterPage } from './portfolio-register/portfolio-register';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage implements OnInit{

  portfolioItens

  constructor(public navCtrl: NavController, 
              private auth : AuthProvider, 
              private persistece : PersistenceProvider) {
  }

  ngOnInit(){
    this.getPortfolio()
  }

  async getPortfolio(){
    this.portfolioItens = await this.persistece.getAll('portfolio')
  }

  refresh(){
    this.getPortfolio()
  }
  
  create(){
    this.navCtrl.push(PortfolioRegisterPage)
  }
  

}
