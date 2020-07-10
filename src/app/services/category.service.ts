import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  // _url ='http://localhost:3600/locations';
  _url ='/assets/Stub/category.json';

  getCategory(): Observable<any[]> {
    return this._http.get<any[]>(this._url);
  }
}
