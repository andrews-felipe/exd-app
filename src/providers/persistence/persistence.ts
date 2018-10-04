import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class PersistenceProvider {

  constructor(private firemodule : AngularFireDatabase) {}
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
  post(endpoint, object){
    return this.firemodule.list(endpoint).push(object)
  }
  // put(endpoint, id, object){
  //   return this.firemodule.list(`${endpoint}/${id}`).set()
  // }

  /**
   * @param key
   * @param endpoint
   */
  remove(key: string, endpoint) {
    return this.firemodule.list(endpoint).remove(key);
  }
}   