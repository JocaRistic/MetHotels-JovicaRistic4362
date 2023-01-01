import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  //racuna ukupnu cenu za odredjen broj noci
  getPrice(brojNoci: number, cenaNocenja: number){
    return brojNoci*cenaNocenja;
  }
}
