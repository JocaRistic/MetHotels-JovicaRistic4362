import { Component, Input } from '@angular/core';
import { Smestaj } from '../models/smestaj';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent {
  @Input() smestaji: Smestaj[];

  constructor(){
    this.smestaji = [];
  }
}
