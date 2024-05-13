import { Injectable } from '@angular/core';
import { IApartment } from '../Interfaces/iapartment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePagePropertiesService {
  constructor(private httpClient: HttpClient) {}
  getRandomProp(randomProp: number): Observable<any> {
    return this.httpClient.get<any>(
      `http://localhost:5019/api/Property?randomProp=${randomProp}`
    );
  }
}
