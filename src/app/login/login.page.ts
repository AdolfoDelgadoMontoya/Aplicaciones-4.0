import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RedireccionamientoService } from '../services/redireccionamiento.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:string='';
  password:string='';
  showPass:boolean=false;

  constructor(
    private alertController:AlertController,
    private redireccionamiento:RedireccionamientoService) {}

  ngOnInit() {}

  togglePassword(){this.showPass=!this.showPass;}

  async mandarMensaje(mensaje:string, titulo:string){
    const alerta = await this.alertController.create(
      {
        header:titulo,
        message:mensaje,
        buttons:['Cerrar']
      });
      await alerta.present();
  }

  async login(){
    await this.mandarMensaje('Hola mundo', 'Notificación');
  }

  nav(data:string){
    this.redireccionamiento.redireccion(data);
  }
}
