import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smestaj } from '../models/smestaj';
import { PregledSobeService } from '../services/pregled-sobe.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-ponuda-smestaj-card',
  templateUrl: './ponuda-smestaj-card.component.html',
  styleUrls: ['./ponuda-smestaj-card.component.css']
})
export class PonudaSmestajCardComponent {
  smestaj: Smestaj;
  cenaDodatnihUsluga: number;
  dodatneUsluge: String[];

  id: number;

  constructor(private route: ActivatedRoute, private roomService: RoomService, private pregledSobe: PregledSobeService){
    this.cenaDodatnihUsluga = 0;
    this.dodatneUsluge = [];
    route.params.subscribe(params => this.id = params['id']);
    this.pregledSobe.getSmestaj(this.id).subscribe(data => this.smestaj = data);
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
  rezervacija(brojNocenja: any){
      let cenaNocenjaSaUslugama: number = this.smestaj.cena + this.cenaDodatnihUsluga;
      let ukupnaCena: number = this.roomService.getPrice(Number(brojNocenja), cenaNocenjaSaUslugama);
      if (confirm(`Ukupna cena za ${brojNocenja} nocenja iznosi: ${ukupnaCena} EUR.\nDa li zelite da potvrdite rezervaciju?`)) {
        alert(`Uspesna rezervacija.\n Cena: ${ukupnaCena} EUR \n Broj nocenja: ${brojNocenja}`)
      } else {
        alert('Rezervacija otkazana.')
      }
  }
}
