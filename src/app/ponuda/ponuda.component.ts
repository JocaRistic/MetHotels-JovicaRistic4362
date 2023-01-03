import { Component, Input } from '@angular/core';
import { Smestaj } from '../models/smestaj';
import { SmestajCrudService } from '../services/smestaj-crud.service';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent {
  smestaji: Smestaj[];

  constructor(private _smestajCrudService: SmestajCrudService){
    this._smestajCrudService.getSmestaji().subscribe(
      (data) => this.smestaji = data);
  }
}
