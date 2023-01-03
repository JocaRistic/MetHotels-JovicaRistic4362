import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Smestaj } from '../models/smestaj';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SmestajCrudService {

  private baseURL = 'http://localhost:3000/smestaji';

  constructor(private _httpClient: HttpClient) { 
  }

  //citanje liste smestaja u tok podataka
  public getSmestaji(): Observable<Smestaj[]> {
    return this._httpClient.get<any>(this.baseURL).pipe(map((data: any[]) => data.map((item: any) => this._createSmestajFromObject(item))),);
  }

  //citanje nekog smestaja u tok podataka
  public getSmestaj(id?: number) : Observable<Smestaj> {
    return this._httpClient.get(this.baseURL + '/' + id).pipe(
      map((data: any) => this._createSmestajFromObject(data)),
    );
  }

  //brisanje nekog objekta tipa smestaj iz baze i vracanje istog u tok
  public deleteSmestaj(id?: number) : Observable<Smestaj> {
    return this._httpClient.delete(this.baseURL + '/' + id).pipe(
      map((data: any) => this._createSmestajFromObject(data)),
    );
  }

  //dodavanje novog objekta tipa smestaj u bazu i vracanje istog u tok
  public createSmestaj(smestaj: Smestaj) : Observable<Smestaj> {
    return this._httpClient.post(this.baseURL, smestaj).pipe(
      map((data: any) =>  this._createSmestajFromObject(data)),
    );
  }

  //kreiranje objekta tipa smestaj od vrednosti vracenih iz baze
  private _createSmestajFromObject(item:any) {
    return new Smestaj(item.brojSmestaja, item.brojKreveta, item.cena, item.ocena, item.slika, item.id);
  }
}
