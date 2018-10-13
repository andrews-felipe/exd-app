import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PortifolioItem } from '../../../models/portifolio';



@Component({
  selector: 'page-portfolio-register',
  templateUrl: 'portfolio-register.html',
})
export class PortfolioRegisterPage {

  item : PortifolioItem = new PortifolioItem()

  constructor(public navCtrl: NavController, public img : GalleryProvider) {
  }

  sendItem(){
    this.item.
  }


}
