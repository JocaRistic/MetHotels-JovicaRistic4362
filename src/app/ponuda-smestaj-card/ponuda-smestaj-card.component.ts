import { Component, Input } from '@angular/core';
import { Smestaj } from '../models/smestaj';

@Component({
  selector: 'app-ponuda-smestaj-card',
  templateUrl: './ponuda-smestaj-card.component.html',
  styleUrls: ['./ponuda-smestaj-card.component.css']
})
export class PonudaSmestajCardComponent {
  @Input() smestaj: Smestaj;
  cenaDodatnihUsluga: number;
  dodatneUsluge: String[];

  constructor(){
    this.cenaDodatnihUsluga = 0;
    this.dodatneUsluge = [];
  }

  //ukoliko se cekira klima kao dodatna usluga cena dodatnih usluga se povecava za 15e
  addUslugaKlima(){
    const pos: number = this.dodatneUsluge.indexOf('klima');
    if (pos > -1) {
      this.dodatneUsluge.splice(pos, 1);
      this.cenaDodatnihUsluga -= 15;
    } else {
      this.dodatneUsluge.push('klima');
      this.cenaDodatnihUsluga += 15;
    }
  }

  //ukoliko se cekira mini bar kao dodatna usluga cena dodatnih usluga se povecava za 30e
  addUslugaMinibar(){
    const pos: number = this.dodatneUsluge.indexOf('minibar');
    if (pos > -1) {
      this.dodatneUsluge.splice(pos, 1);
      this.cenaDodatnihUsluga -= 30;
    } else {
      this.dodatneUsluge.push('minibar');
      this.cenaDodatnihUsluga += 30;
    }
  }

  //ukoliko se cekira sauna kao dodatna usluga cena dodatnih usluga se povecava za 50e
  addUslugaSauna(){
    const pos: number = this.dodatneUsluge.indexOf('sauna');
    if (pos > -1) {
      this.dodatneUsluge.splice(pos, 1);
      this.cenaDodatnihUsluga -= 50;
    } else {
      this.dodatneUsluge.push('sauna');
      this.cenaDodatnihUsluga += 50;
    }
  }

  //ukoliko se klikne na dugme za rezervaciju otvara se popup za potvrdu rezervacije 
  rezervacija(){
      let ukupnaCena = this.smestaj.cena + this.cenaDodatnihUsluga;
      if (confirm(`Ukupna cena: ${ukupnaCena} EUR / night.\nDa li zelite da potvrdite rezervaciju?`)) {
      } else {
      }
  }
}