import { Component } from '@angular/core';
import { Smestaj } from './models/smestaj';
import { SmestajCrudService } from './services/smestaj-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaSmestaja: Smestaj[];

  constructor(private _smestajCrudService: SmestajCrudService){

    this._smestajCrudService.getSmestaji().subscribe(
      (data) => this.listaSmestaja = data
    );
  }

  addSmestaj(smestaj: Smestaj){
    this.createSmestaj(smestaj);
  }

  //metod poziva funkciju za dodavanje novog smestaja u bazu iz servisa i dodaje smestaj u listu
  createSmestaj(smestaj: Smestaj) {
    this._smestajCrudService.createSmestaj(smestaj).subscribe((data) => {
      this.listaSmestaja.push(data);
      alert('Smestaj je uspesno dodat.');
    })
  }

  //metod poziva funkciju za brisanje smestaja iz baze i ukoliko je obrisan poziva fju za brisanje smestaja iz liste
  deleteSmestaj(smestaj: Smestaj) {
    this._smestajCrudService.deleteSmestaj(smestaj.id).subscribe((data) => {
      this.removeSmestajFromList(smestaj.id);
      alert('Smestaj je uspesno obrisan');
    })
  }

  //brisanje smestaja iz liste
  private removeSmestajFromList(id?: number) {
    let ind = this.listaSmestaja.findIndex(smestaj => smestaj.id == id);
    this.listaSmestaja.splice(ind, 1);
  }
}
