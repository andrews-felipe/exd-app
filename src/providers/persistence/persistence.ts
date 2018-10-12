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
   * @ Mateus Lourenço
   * Implementação : O getById servirá apenas para captar as propostas do usuário, assim ele 
   * poderá acompanhar as mesmas. 
   * 
   * Como será feito ? Usando o módulo (this.firemodule) terá que ser feito uma query na base 
   * pegando as propostas pelo o uid do usuário atual,ou seja para cada proposta cadastrada no sistema
   * elas terão o uid do usuário. Esse uid poderá ser visto no service Auth
   * lá existe um atributo currentUser.
   * 
   * @param endpoint 
   * @param key 
   */
  getById(endpoint, key) {
    
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
  put(endpoint, object){
    this.firemodule.list(endpoint).set(object.key, object)
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