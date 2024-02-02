import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {

  items:any[]=[
    {hora:'20:30'},{hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'},
    {hora:'20:30'},{hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'},
    {hora:'20:30'},{hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'},
    {hora:'20:30'},{hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'},
    {hora:'20:30'},{hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'}, {hora:'20:30'}
  ];
  //Arreglo de arreglos: [{hora:'20:30'}], [{hora:'20:30'}], [{hora:'20:30'}], [{hora:'20:30'}]

  constructor() { }

  ngOnInit() {
    this.crearItems();
  }

  crearItems(){
    for(let i = 0; i<=50; i++){
      hora:
      ''+
      Math.floor(Math.random()* 23)+
      ':'+
      Math.floor(Math.random()* 59);
    }
  }
  onIonInfinite(event:any){}
}
