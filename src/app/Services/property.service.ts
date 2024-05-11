import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GetTokenService } from './get-token.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:5019/api/Property';
  constructor(private http: HttpClient,private _GetTokenService:GetTokenService) { }
  addProperty(propertyData: any): Observable<any> {
    const headers = this._GetTokenService.getHeaders();
    return this.http.post(this.apiUrl, propertyData, { headers});
  }

  addDependency(images: any, id: number): Observable<any> {
    const headers = this._GetTokenService.getHeaders();
    return this.http.post(this.apiUrl + `/${id}`, images, { headers});
  }
}
