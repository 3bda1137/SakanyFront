import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  constructor() { }
   getHeaders(): HttpHeaders {
    const api_key = localStorage.getItem("userToken");
    return new HttpHeaders().set('Authorization', `Bearer ${api_key}`);
  }
}
