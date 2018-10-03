import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-portfolio-admin',
  templateUrl: 'portfolio-admin.html',
})
export class PortfolioAdminPage {

  titles: string[];
  descriptions: string[];
  images: Object[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  updatePortfolio(image, title, description, newImage){

    var index = -1;

    if(this.existPortfolio(image))
    {
      index = this.images.indexOf(image);
    }
    if(index != -1)
    {
      this.titles[index] = title;
      this.descriptions[index] = description;
      this.images[index] = newImage;

      console.log("Portfolio atualizado com sucesso.");
    }
    else
    {
      console.log("Portfolio não encontrado ou inexistente.");
    }
  }

  addPortfolio(title, description, image)
  {
    if(!this.existPortfolio(title))
    {
      this.images.push(image);
      this.titles.push(title);
      this.descriptions.push(description);

      console.log("Portfolio adicionado com sucesso.");
    }
    else
    {
      console.log("Portfolio já existente.");
    }
  }

  private existPortfolio(title)
  {
    return (title in this.titles);
  }

  deletePortfolio(title)
  {
    if(!this.isEmpty())
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
    else if(this.isEmpty())
    {
      console.log("Não existe nenhum Portfolio cadastrado no sistema.");
    }
    else
    {
      console.log("Portfolio não encontrado ou inexistente.");
    }
  }

  private isEmpty()
  {
    return (this.titles.length > 0);
  }
}
