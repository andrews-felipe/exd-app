import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Injectable()
export class GalleryProvider {

  
  constructor(private camera: Camera) {
   
  }
  /***
   *  Method for capture image of gallery
   */
  openGallery () {  
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
    this.camera.getPicture(cameraOptions)
      .then(file_uri =>{
        return file_uri;     
      }).catch(
        err=>{
          console.log(err)
      });  
   }

}
