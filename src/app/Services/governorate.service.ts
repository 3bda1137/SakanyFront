import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetTokenService } from './get-token.service';

@Injectable({
  providedIn: 'root'
})
export class GovernorateService {
  private baseUrl = 'http://localhost:5019/api';

  constructor(private http: HttpClient,private _GetTokenService:GetTokenService) { }

  getGovernorates(): Observable<any> {
    const url = `${this.baseUrl}/Governorate`;
    const headers = this._GetTokenService.getHeaders();
    return this.http.get<any>(url,{headers});
  }
  
  getCitiesInGovernorateId(governorateId: number): Observable<any> {
    const headers = this._GetTokenService.getHeaders();
    const url = `${this.baseUrl}/City/${governorateId}`;
    return this.http.get<any>(url,{headers});
  }
}
