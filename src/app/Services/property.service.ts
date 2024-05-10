import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:5019/api/Property';

  constructor(private http: HttpClient) { }

  addProperty(propertyData: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.apiUrl, propertyData);
  }
  addDependency(images:any,id:number): Observable<any>{
    return this.http.post(this.apiUrl+`/${id}`, images);
  }
}
