import { Component } from '@angular/core';
import { Smestaj } from './models/smestaj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaSmestaja: Smestaj[];

  constructor(){
    this.listaSmestaja = [
      new Smestaj(101, 2, 300, 9.5, 'https://cf.bstatic.com/xdata/images/hotel/270x200/273821265.webp?k=54a9cbe13a34cd98ab6ae409b20e041f98001a46da8de1e0a1fed763191a595c&o='),
      new Smestaj(102, 1, 150, 8, 'https://cf.bstatic.com/xdata/images/hotel/square600/332039571.webp?k=adc1c4b705291a8f395dea3f66ea47741860dc9cefe55c7622e9e776fd63f1b5&o=&s=1'),
      new Smestaj(103, 2, 200, 7.4, 'https://cf.bstatic.com/xdata/images/hotel/square600/308525513.webp?k=9a353e1a2d0b435c72e8b6fd722110722fa9104c6489b9298aadbd8984ec9a49&o=&s=1'),
    ]
  }

  addSmestaj(smestaj: Smestaj){
    this.listaSmestaja.push(smestaj);
  }
}
