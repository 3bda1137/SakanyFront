import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from '../Interfaces/property';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://your-api-url.com/properties';

  constructor(private http: HttpClient) { }

  submitProperty(property: Property): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, property, { headers })
      .pipe(
        catchError(error => {
          console.log("--------------Error-------------");
          console.log(error)
          return error; // Handle errors
        })
      );
  }
}
