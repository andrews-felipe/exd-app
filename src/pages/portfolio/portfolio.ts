import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioAdminPage } from './portfolio-admin/portfolio-admin';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  titles: string[];
  descriptions: string[];
  images = ['portf1.jpg', 'portf2.jpg', 'portf3.png'];
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

  updatePortfolio(portfolioName, title, description, newPortfolioName){

    var index = -1;

    if(this.existPortfolio(portfolioName))
    {
      index = this.images.indexOf(portfolioName);
    }
    if(index != -1)
    {
      this.titles[index] = title;
      this.descriptions[index] = description;
      this.images[index] = newPortfolioName;

      console.log("Portfolio atualizado com sucesso.");
    }
    else
    {
      console.log("Portfolio não encontrado ou inexistente.");
    }
  }

  addPortfolio(title, description, imageName)
  {
    if(!this.existPortfolio(title))
    {
      this.images.push(imageName);
      this.titles.push(title);
      this.descriptions.push(description);

      console.log("Portfolio adicionado com sucesso.");
    }
    else
    {
      console.log("Portfolio já existente.");
    }
  }

  existPortfolio(title)
  {
    return (title in this.titles);
  }

  
  deletePortfolio(title)
  {
    if(this.isEmpty())
    {
      if(title in this.titles)
      {
        var index = this.titles.indexOf(title);

        delete this.titles[index];
        delete this.descriptions[index];
        delete this.images[index];

        console.log("Portfolio removido com sucesso.");
      }
      else
      {
        console.log("Portfolio não encontrado ou inexistente.");
      }
    }
    else if(!this.isEmpty())
    {
      console.log("Não existe nenhum Portfolio cadastrado no sistema.");
    }
    else
    {
      console.log("Portfolio não encontrado ou inexistente.");
    }
  }

  isEmpty()
  {
    return (this.titles.length > 0);
  }

}
