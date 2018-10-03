import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioAdminPage } from './portfolio-admin/portfolio-admin';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  admin: PortfolioAdminPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  getPortfolioByIndex(index)
  {
    if(!this.isEmpty())
    {
      if(this.admin.titles.length >= index)
      {
        console.log(this.admin.images[index]);
        console.log(this.admin.titles[index]);
        console.log(this.admin.descriptions[index]);
      }
      else
      {
        console.log("Índice inválido.");
      }
    }
    else
    {
      console.log("Não existe nenhum Portfolio cadastrado no sistema.");
    }
  }

  getPortfolios()
  {
    if(!this.isEmpty())
    {
      for(var i = 0; i < this.admin.titles.length; i++)
      {
        console.log(this.admin.images[i]);
        console.log(this.admin.titles[i]);
        console.log(this.admin.descriptions[i]);
      }
    }
    else
    {
      console.log("Não existe nenhum Portfolio cadastrado no sistema.");
    }
  }

  private isEmpty()
  {
    return (this.admin.titles.length > 0);
  }

}
