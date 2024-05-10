import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _HttpClient: HttpClient) { }

  userInfo = new BehaviorSubject(null);
  register(RegisterData: object): Observable<any> {
    console.log("---------register---------------")
    console.log(RegisterData)
    return this._HttpClient.post("http://localhost:5019/api/Account/register", RegisterData)
  }
  login(loginData: object): Observable<any> {
    console.log("---------Login---------------")
    console.log(loginData)
    return this._HttpClient.post("http://localhost:5019/api/Account/login", loginData)
  }

  logout() {
    localStorage.removeItem("userToken");
    this.userInfo.next(null);

  }
  setInformaionOfUser() {
    let userToken = JSON.stringify(localStorage.getItem("userToken"));
    let decodedToken: any = jwtDecode(userToken);
    this.userInfo.next(decodedToken);
    console.log("--------setInformaionOfUser---------")
    console.log(this.userInfo.getValue())
    const nameIdentifier = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    console.log("----------------------------")
    console.log(nameIdentifier);
  }
}
