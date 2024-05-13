import { Injectable } from '@angular/core';
import { IApartment } from '../Interfaces/iapartment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowAllPropertiesService {
  pageNum: number = 0;
  pageSize: number = 6;
  numOfRooms: number = 0;
  priceRange: string = '';
  govId: number = 0;
  cityId: number = 0;
  testJson: object[] = [];
  private allApartments: IApartment[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllProperties(
    pageNum: number,
    pageSize: number,
    numOfRooms: number,
    priceRange: string,
    govId: number,
    cityId: number
  ): Observable<any> {
    return this.httpClient.get<any>(
      `http://localhost:5019/api/Property?pageNum=${pageNum}&pageSize=${pageSize}&numOfRooms=${numOfRooms}&priceRange=${priceRange}&govId=${govId}&cityId=${cityId}`
    );
  }
}
