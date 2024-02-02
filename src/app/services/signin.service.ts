import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor() { }

  async registroAuth(user:string ,mail:string, pass:string)
  {
    try{
      const resultado = await firebase.auth().createUserWithEmailAndPassword(mail,pass);
      if(resultado.user){
        await resultado.user.updateProfile({displayName:user});
        await resultado.user.sendEmailVerification();
      }
    }catch(e){
      console.log('error inesperado');
    }
  }
}
