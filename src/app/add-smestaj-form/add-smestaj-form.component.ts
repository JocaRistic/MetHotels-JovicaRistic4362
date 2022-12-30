import { Component, Output, EventEmitter } from '@angular/core';
import { Smestaj } from '../models/smestaj';

@Component({
  selector: 'app-smestaj',
  templateUrl: './add-smestaj-form.component.html',
  styleUrls: ['./add-smestaj-form.component.css']
})
export class SmestajComponent {
  @Output() smestajToAdd: EventEmitter<Smestaj>;

  constructor(){
    this.smestajToAdd = new EventEmitter<Smestaj>;
  }

  dodajSmestaj(brojSmestaja: HTMLInputElement, brojKreveta: HTMLInputElement, cena: HTMLInputElement, ocena: HTMLInputElement, slika: HTMLInputElement){
    this.smestajToAdd.emit(new Smestaj(parseInt(brojSmestaja.value), parseInt(brojKreveta.value), parseFloat(cena.value), parseFloat(ocena.value), slika.value))
    brojSmestaja.value = '';
    brojKreveta.value = '';
    cena.value = '';
    ocena.value = '';
    slika.value = '';
    return false;
  }
}
