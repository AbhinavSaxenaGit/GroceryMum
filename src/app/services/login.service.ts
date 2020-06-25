import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  _url ='http://localhost:3600/auth';

  login(userLoginInfo) {
    return this._http.post(this._url, userLoginInfo, {observe: 'response'});
  }
}
