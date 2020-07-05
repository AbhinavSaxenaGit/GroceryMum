import { IProducts } from './templates';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  _url ='/assets/Stub/products.json';

  getProducts(): Observable<any> {
    return this._http.get<any>(this._url, {observe: 'response'});
  }
}