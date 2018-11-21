import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class PersistenceProvider {


  currentItem

  constructor(private firemodule: AngularFireDatabase, private storage: AngularFireStorage) { }

  getKey() {
    return this.firemodule.createPushId();
  }

  /**
   * Method for getAll itens for ( Endpoint )
   * @param endpoint 
   */
  getAll(endpoint){
    let mappedItens : Array<any> = new Array<any>()
    return this.firemodule.list(endpoint).query
            .once("value")
            .then(res=>{
                res.forEach((item)=>{
                  mappedItens.push({key : item.key, ...item.val()})
            })
            return mappedItens
    })
  }
  /**
   * Method for return proposals of user current
   * @param endpoint 
   * @param key 
   */
  getByUid(endpoint, uid) {
    let mappedItens : Array<any> = new Array<any>()
    return this.firemodule.list(endpoint).query.orderByChild('uid').equalTo(uid)
            .once("value")
            .then(res=>{
                res.forEach((item)=>{
                  mappedItens.push({key : item.key, ...item.val()})
            })
            return mappedItens
    })
  }

  getById(endpoint, key) {
    return this.firemodule.list(endpoint).query.orderByKey().equalTo(key)
            .once("child_added")
            .then(res=>{
              return { key : key, ...res.val()}
    })
  }
    
  /**
   * Method for sae item in database with endpoint
   * @param endpoint 
   * @param object 
   */
  post(endpoint, object) {
    return this.firemodule.list(endpoint).push(object)
  }

  /**
   * Method for update objects in database
   * 
   * @param endpoint 
   * @param object 
   */
  put(endpoint, item) {
    let key = item.key
    delete item.key
    return new Promise((resolve, reject) => {
      this.firemodule.list(endpoint).set(key, item)
        .then(() => resolve())
        .catch((err) => reject(err))
    })
  }
  

  /**
   * Method for remove item in database
   * 
   * @param key
   * @param endpoint
   */
  remove(key: string, endpoint) {
    return this.firemodule.list(endpoint).remove(key);
  }
  
  /**
   * Method for upload img and return link
   * @param imageFile 
   */
  upload(base64Image) {
    
    let imgKey = `imagem${this.getKey()}`;
    const uploadTask = this.storage.ref(`imagens/${imgKey}`)
      .putString(base64Image, 'data_url').then( 
        url => 
        url.downloadURL 
    );

    return imgKey
    
  }

  download(imgKey){
    const imgRef = this.storage.ref(`imagens/${imgKey}`);
    return imgRef.getDownloadURL();
  }

  delete(imgKey) {
    this.storage.ref(`imagens/${imgKey}`).delete();
  }
  

}   