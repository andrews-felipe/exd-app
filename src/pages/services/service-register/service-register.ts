import { ServicesPage } from './../services';
import { PersistenceProvider } from './../../../providers/persistence/persistence';
import { Service } from './../../../models/service';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { GalleryProvider } from '../../../providers/gallery/gallery';

@Component({
  selector: 'page-service-register',
  templateUrl: 'service-register.html',
})
export class ServiceRegisterPage {

  /**
   * Instance of new Service for system
   */
  newService: Service = new Service();
  imgCurrent


  constructor(private navCtrl: NavController,
    private toastCtrl: ToastController,
    private persistence: PersistenceProvider,
    private navParams: NavParams,
    private camera: GalleryProvider,
  ) { }


  async addImage() {
    this.camera.getPicture().then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgCurrent = base64Image;
    }, (err) => {
      console.log(err);
    });
  }
  /**
   * Method for validate and save service in database
   */
  async registerService() {
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
    if (this.imgCurrent) {
      this.newService.imageUrl = await this.persistence.upload(this.imgCurrent)
      if (this.newService.title && this.newService.description && this.newService.imageUrl) {
        this.persistence.post('services', this.newService)
          .then(() => {
            toast.setMessage('Serviço Cadastrado com sucesso!');
            toast.present();
            this.navCtrl.setRoot(ServicesPage);
          })
      } else {
        toast.setMessage('Todos os campos devem ser preenchidos');
        toast.present();
      }
    } else {
      toast.setMessage('Você precisa inserir uma imagem')
      toast.present()
    }
  }
}