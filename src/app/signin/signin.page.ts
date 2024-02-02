import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  user:string='';
  mensaje:string='';
  mail:string='';
  password1:string='';
  p1:boolean=true;
  password2:string='';
  p2:boolean=true;


  constructor(
    private signIn:SigninService,
    private redireccionamiento:RedireccionamientoService) {}

  ngOnInit() {
  }
  
  togglePass(letra:string){
    if(letra=='a'){
      this.p1 = !this.p1;
    }
    if(letra=='b'){
      this.p2 = !this.p2;
    }
  }

  async signin (){
    this.signIn.registroAuth(this.user, this.mail, this.password2);
  }

  nav(data:string){
    this.redireccionamiento.redireccion(data);
  }

}
