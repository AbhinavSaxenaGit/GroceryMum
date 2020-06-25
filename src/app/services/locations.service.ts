import { ILocations } from './templates';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private _http: HttpClient) { }

  _url ='http://localhost:3600/locations';

  getLocations(): Observable<ILocations[]> {
    return this._http.get<ILocations[]>(this._url);
  }
}