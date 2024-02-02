import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  isLoggedIn:boolean=false;
  constructor() {}
  async login (u:string, p:string){
    if(u==''||p==''){
      return false;
    }
    if( await !this.uChecker(u) || await !this.pChecker(p)){
      return false;
    }
    return await this.authFirebase(u,p);
  }
  async uChecker(u:string){
    return /[a-zA-Z0-9_-@.]/.test(u);
  }

  async pChecker(p:string){
    if(p.length<8 || /[A-Za-z0-9-=!-_]/){
      return false;
    }
    return true;
  }

  async authFirebase(u:string, p:string){
    try{
      const resultado = await firebase.auth().signInWithEmailAndPassword(u,p);
      if(resultado.user && resultado.user.uid)
      {
        this.setLogginState(u, resultado.user.uid);
        this.setLoggin();
        return false;
      }
      return true;
    } catch (e) {
      console.log(e)
    }
    return true;
  }

  async setLogginState(u:string, uid:any){
    localStorage.setItem('uid',JSON.stringify(uid));
    localStorage.setItem('user',JSON.stringify(u));
    localStorage.setItem('level',JSON.stringify('1'));
  }

  setLoggin(){
    this.isLoggedIn = !this.isLoggedIn;
  }
}
