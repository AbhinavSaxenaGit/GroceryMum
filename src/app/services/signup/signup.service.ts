import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient) { }

  _url ='http://localhost:3600/users';

  signUp(userSignUpInfo) {
    return this._http.post(this._url, userSignUpInfo);
  }
}
