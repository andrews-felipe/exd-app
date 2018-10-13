import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthProvider {

  
  currentUser : Observable<any>  
  
  constructor(private fireAuth : AngularFireAuth, private dataBase : AngularFireDatabase) {

  }

  /***
   * Method for validate user in system.
   */
  authLoginValidate(user){
    return new Promise((resolve, reject)=>{
      this.fireAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      ).then(res=>{
        resolve();  
        this.getInfoUser()
      }, error => {
          reject(error)
      });
    })
  }

/***
   * Method for sign-up user.
   */
  singUpUser(user){
    return new Promise((resolve, reject)=>{
      const process = this.fireAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then(res=>{
        user.uid = this.fireAuth.auth.currentUser.uid
        this.registerInfoUser(user).then(
          (res=>{
            resolve();
          })
        )
      }, error =>{
        reject(error)
      }
    )
    })
  }
  /***
   * Method for persist information user's in system.
   */
  registerInfoUser(user){
    return this.dataBase.list('user').push(user)
  }

  /***
   * Method for get user with uid in current login.
   */
  getInfoUser(){
    const currentUid = this.fireAuth.auth.currentUser.uid
    this.dataBase.list('user').query.orderByChild('uid').equalTo(currentUid)
            .once("child_added")
            .then(res=>{
                this.currentUser = res.val()
    })
  }

  /**
   * Method to reset the password by passing the user's email.
   * @param email 
   */
  resetPassword(email: string) {
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }
}
