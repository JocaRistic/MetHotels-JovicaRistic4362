import { Component } from '@angular/core';
import { Smestaj } from '../models/smestaj';

@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css']
})
export class SmestajComponent {
  listaSmestaja: Smestaj[];

  constructor(){
    this.listaSmestaja = [
      new Smestaj(101, 2, 300, 7.4, 'slika1putanja'),
      new Smestaj(102, 3, 350, 8, 'slika2putanja'),
      new Smestaj(103, 4, 450, 9.5, 'slika3putanja'),
    ]
  }

  dodajSmestaj(brojSmestaja: HTMLInputElement, brojKreveta: HTMLInputElement, cena: HTMLInputElement, ocena: HTMLInputElement, slika: HTMLInputElement){
    this.listaSmestaja.push(new Smestaj(parseInt(brojSmestaja.value), parseInt(brojKreveta.value), parseFloat(cena.value), parseFloat(ocena.value), slika.value))
    brojSmestaja.value = '';
    brojKreveta.value = '';
    cena.value = '';
    ocena.value = '';
    slika.value = '';
    return false;
  }
}
