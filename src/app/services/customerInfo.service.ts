import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  _infoURL ='/assets/Stub/customerInfo.json';
  _orderURL ='/assets/Stub/customerOrder.json';

  getCustomerInfo(): Observable<any> {
    return this._http.get<any>(this._infoURL, {observe: 'response'});
  }

  getCustomerOrder(): Observable<any> {
    return this._http.get<any>(this._orderURL, {observe: 'response'});
  }
}