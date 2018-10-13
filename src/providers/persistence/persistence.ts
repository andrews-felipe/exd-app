import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';


@Injectable()
export class PersistenceProvider {

  constructor(private firemodule: AngularFireDatabase, private storage: AngularFireStorage) { }
  /**
   * Method for getAll itens for ( Endpoint )
   * @param endpoint 
   */
  getAll(endpoint) {
    return this.firemodule.list(endpoint, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(res => ({ key: res.payload.key, ...res.payload.val() }));
      })
  }
  /**
   * Method for return proposals of user current
   * @param endpoint 
   * @param key 
   */
  getById(endpoint, uid) {
    return this.firemodule.list('proposal').query.orderByChild('uid').equalTo(uid)
            .once("child_added")
            .then(res=>{
                console.log(res)
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
  put(endpoint, object) {
    return this.firemodule.object(`/${endpoint}/'${object.key}`)
    .update({ content: object.content , done: !object.done });    
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
  async upload(base64Image) {
    let imgKey = `imagem${Math.floor(Math.random() * 1000000)}`;
    const uploadTask = await this.storage.ref(`imagens/${imgKey}`)
      .putString(base64Image, 'data_url');

    return uploadTask.downloadURL;
    
  }

  download(imgKey): Observable<any> {
    const imgRef = this.storage.ref(`imagens/${imgKey}`);
    return imgRef.getDownloadURL();
  }

  delete(imgKey) {
    this.storage.ref(`imagens/${imgKey}`).delete();
  }
  

}   