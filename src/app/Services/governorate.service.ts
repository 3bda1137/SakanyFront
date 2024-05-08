import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GovernorateService {
  private baseUrl = 'http://localhost:5019/api';

  constructor(private http: HttpClient) { }

  getGovernorates(): Observable<any> {
    const url = `${this.baseUrl}/Governorate`;
    return this.http.get<any>(url);
  }
  getCitiesInGovernorateId(governorateId: number): Observable<any> {
    const url = `${this.baseUrl}/City/${governorateId}`;
    return this.http.get<any>(url);
  }
}
