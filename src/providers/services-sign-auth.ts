import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable()
export class SignAuthService {

  constructor(public http: HttpClient, private fireAuth : AngularFireAuth) {

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

  singUpUser(user){
    return new Promise((resolve, reject)=>{
      this.fireAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then(res=>{
        resolve();
        this.registerInfoUser(user)
      }, error =>{
        reject(error)
      }
    )
    })
  }

  registerInfoUser(user){

  }

  


  
}