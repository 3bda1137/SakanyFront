import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _HttpClient:HttpClient) { }

  register(RegisterData:object):Observable<any>{
    console.log("---------register---------------")
    console.log(RegisterData)
    return this._HttpClient.post("http://localhost:5019/api/Account/register",RegisterData)
  }
  login(loginData:object):Observable<any>{
    console.log("---------Login---------------")
    console.log(loginData)
    return this._HttpClient.post("http://localhost:5019/api/Account/login",loginData)
  }
}
