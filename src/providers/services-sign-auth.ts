import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';



@Injectable()
export class SignAuthService {

  constructor(public http: HttpClient, private fireAuth : AngularFireAuth) {

  }

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


  
}