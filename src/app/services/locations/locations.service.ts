import { ILocations } from './locations';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


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