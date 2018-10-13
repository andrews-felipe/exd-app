import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PortifolioItem } from '../../../models/portifolio';
import { GalleryProvider } from '../../../providers/gallery/gallery';
import { PersistenceProvider } from '../../../providers/persistence/persistence';



@Component({
  selector: 'page-portfolio-register',
  templateUrl: 'portfolio-register.html',
})
export class PortfolioRegisterPage {  

  item : PortifolioItem = new PortifolioItem()
  imgCurrent

  constructor(public navCtrl: NavController, 
              private img : GalleryProvider, 
              private persistence : PersistenceProvider,
              private toast : ToastController
              ) {
  }

  addImage(){
    this.imgCurrent = this.img.openGallery();
  }

  async sendItem(){
    let alert = this.toast.create({duration : 3000, position : 'bottom'})
    if(this.imgCurrent){
      this.item.imageUrl = await this.persistence.upload(this.imgCurrent)
      if(this.item.imageUrl && this.item.description && this.item.title){
          this.persistence.post('portfolio', this.item).then(
            ()=>{
              alert.setMessage('Item cadastrado com sucesso!')
              alert.present()
            }
          )
      }else{
        alert.setMessage('Preencha todos os dados')
        alert.present()
      }
    }else{
      alert.setMessage('Você precisa inserir uma imagem')
      alert.present()
    }

    
    
  }


}
