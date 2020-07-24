import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _http: HttpClient) { }

  _allOrdersURL ='/assets/Stub/allOrders.json';
  _activeOrdersURL ='/assets/Stub/activeOrders.json';
  _completedOrdersURL ='/assets/Stub/completedOrders.json';

  getOrders(status): Observable<any> {
    if (status == 1) {
      return this._http.get<any>(this._activeOrdersURL, {observe: 'response'});      
    }
    if (status == 2) {
      return this._http.get<any>(this._completedOrdersURL, {observe: 'response'});      
    }
    if (status == 3) {
      return this._http.get<any>(this._allOrdersURL, {observe: 'response'});      
    }   
    if (status == 4) {
      return this._http.get<any>(this._allOrdersURL, {observe: 'response'});      
    }          
  }
}