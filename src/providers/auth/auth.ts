import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {

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
        resolve(res);  
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
        resolve();
        user.uid = this.fireAuth.auth.currentUser.uid
        this.registerInfoUser(user)
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
      const process = this.fireAuth.auth.currentUser.uid
      return this.dataBase.list('user.uid').query.equalTo(process).toJSON()
  }

  /**
   * Method to reset the password by passing the user's email.
   * @param email 
   */
  resetPassword(email: string) {
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }
}
