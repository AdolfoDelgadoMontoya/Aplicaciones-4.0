import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
import { LoginserviceService } from '../services/loginservice.service';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

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
    private redireccionamiento:RedireccionamientoService,
    //private lsc:StateloginService,
    private navController:NavController,
    private loadingController:LoadingController,
    private loginService: LoginserviceService

    ) {}

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
    await this.presentLoading();
    const result = '';
    await this.loginService.login(
      this.user,this.password
    );
    await this.dismissLoading();
    //await this.mandarMensaje('Hola mundo', 'Notificación');
  }

  nav(data:string){
    this.redireccionamiento.redireccion(data);
  }

  async presentLoading(){
    const carga = await this.loadingController.create({message:'Por favor, espere...'});
    await carga.present();
  }
  async dismissLoading(){
    await this.loadingController.dismiss();
  }
}
