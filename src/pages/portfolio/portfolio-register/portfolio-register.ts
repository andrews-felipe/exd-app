import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PortfolioItem } from '../../../models/portfolio';
import { GalleryProvider } from '../../../providers/gallery/gallery';
import { PersistenceProvider } from '../../../providers/persistence/persistence';



@Component({
  selector: 'page-portfolio-register',
  templateUrl: 'portfolio-register.html',
})
export class PortfolioRegisterPage {  

  item : PortfolioItem = new PortfolioItem()
  imgCurrent

  constructor(public navCtrl: NavController, 
              private img : GalleryProvider, 
              private persistence : PersistenceProvider,
              private toast : ToastController,
              private camera : GalleryProvider, 
              ) {
  }

  async addImage(){
    this.camera.getPicture().then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgCurrent = base64Image;            
    }, (err) => {
      console.log(err);
    });
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
