import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _HttpClient:HttpClient) { }

  register(data:object):Observable<any>{
    console.log("---------register---------------")
    console.log(data)
    return this._HttpClient.post("http://localhost:5019/api/Account/register",data)
  }
}
