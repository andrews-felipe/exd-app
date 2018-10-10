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
   * Method for get only one element 
   * @param endpoint 
   * @param key 
   */
  get(endpoint, key: string) {
    return this.firemodule.object(endpoint + key).snapshotChanges()
      .map(res => {
        return { key: res.key, ...res.payload.val() };
      });
  }
  /**
   * Method for sae item in database with endpoint
   * @param endpoint 
   * @param object 
   */
  post(endpoint, object) {
    return this.firemodule.list(endpoint).push(object)
  }

  // put(endpoint, id, object) {
  //   return this.firemodule.list(`${endpoint}/${id}`).set();
  // }

  /**
   * @param key
   * @param endpoint
   */
  remove(key: string, endpoint) {
    return this.firemodule.list(endpoint).remove(key);
  }

  async upload(imageFile) {
    return new Promise(async (resolve, reject) => {
      let imgKey = `imagem${Math.floor(Math.random() * 1000000)}`;
      const uploadTask = await this.storage.ref(`imagens/${imgKey}`)
        .putString(imageFile, 'data_url');
      (resolve) => {
        return uploadTask.downloadURL;
      }; (err) => {
        return err
      }
    })


  }
  download(imgKey): Observable<any> {
    const imgRef = this.storage.ref(`imagens/${imgKey}`);
    return imgRef.getDownloadURL();
  }

  delete(imgKey) {
    this.storage.ref(`imagens/${imgKey}`).delete();
  }

}   