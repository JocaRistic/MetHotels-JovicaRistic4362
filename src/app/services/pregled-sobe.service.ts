import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Smestaj } from '../models/smestaj';

@Injectable({
  providedIn: 'root'
})
export class PregledSobeService {

  private baseURL = 'http://localhost:3000/smestaji';

  constructor(private _httpClient: HttpClient) { 
  }

  //citanje smestaja za prosledjeni id
  public getSmestaj(id?: number) : Observable<Smestaj> {
    return this._httpClient.get<Smestaj>(this.baseURL + '/' + id);
  }
}
