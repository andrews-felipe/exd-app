import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProposalPage } from '../proposal/proposal';
import { ConfigPage } from '../config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  pushPage(view){
    console.log(view)
    if(view === 'service'){ this.navCtrl.push(ServicesPage)}
    else if(view === 'portfolio'){ this.navCtrl.push(PortfolioPage)}
    else if(view === 'proposal'){ this.navCtrl.push(ProposalPage)}
    else if(view === 'config'){ this.navCtrl.push(ConfigPage)}
  }

}
