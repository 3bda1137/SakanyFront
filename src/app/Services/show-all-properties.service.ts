import { Injectable } from '@angular/core';
import { IApartment } from '../Interfaces/iapartment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowAllPropertiesService {
  private baseUrl = 'http://localhost:5019/api/Property';
  pageNum: number = 0;
  pageSize: number = 6;
  numOfRooms: number = 0;
  priceRange: string = '';
  govId: number = 0;
  cityId: number = 0;
  testJson: object[] = [];
  private allApartments: IApartment[] = [];
  constructor(private httpClient: HttpClient) {
    this.allApartments = [
      {
        imageUrl:
          'https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg',
        description: 'Beautiful apartment with stunning views',
        price: 200000,
        id: 1,
        title: 'Luxury Apartment',
        type: 'Apartment',
        numOfRooms: 3,
        numOfBathrooms: 2,
        area: 1500,
        address: '123 Main St',
        ownerName: 'John Doe',
        ownerImageUrl:
          'https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21971.jpg',
        postAddedTime: '2024-05-10T12:00:00Z',
        isForSale: false,
        status: 'Sale',
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Cozy apartment in a quiet neighborhood',
        price: 150000,
        id: 2,
        title: 'Cozy Apartment',
        type: 'Apartment',
        numOfRooms: 2,
        numOfBathrooms: 1,
        area: 1000,
        address: '456 Elm St',
        ownerName: 'Jane Smith',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-09T09:00:00Z',
        isForSale: true,
        status: 'Rent',
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Spacious apartment with modern amenities',
        price: 180000,
        id: 3,
        title: 'Modern Apartment',
        type: 'Apartment',
        numOfRooms: 2,
        numOfBathrooms: 2,
        area: 1200,
        address: '789 Oak St',
        ownerName: 'Mike Johnson',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-08T15:00:00Z',
        isForSale: false,
        status: 'Sale',
      },
      {
        imageUrl:
          'https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg',
        description: 'Charming apartment with vintage charm',
        price: 170000,
        id: 4,
        title: 'Charming Apartment',
        type: 'Apartment',
        numOfRooms: 1,
        numOfBathrooms: 1,
        area: 800,
        address: '101 Pine St',
        ownerName: 'Emily Brown',
        ownerImageUrl:
          'https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21971.jpg',
        postAddedTime: '2024-05-07T10:00:00Z',
        isForSale: false,
        status: 'Sale',
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Cozy apartment in a quiet neighborhood',
        price: 150000,
        id: 2,
        title: 'Cozy Apartment',
        type: 'Apartment',
        numOfRooms: 2,
        numOfBathrooms: 1,
        area: 1000,
        address: '456 Elm St',
        ownerName: 'Jane Smith',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-09T09:00:00Z',
        isForSale: true,
        status: 'Rent',
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Elegant apartment in a prestigious neighborhood',
        price: 250000,
        id: 5,
        title: 'Elegant Apartment',
        type: 'Apartment',
        numOfRooms: 4,
        numOfBathrooms: 3,
        area: 2000,
        address: '222 Maple St',
        ownerName: 'David Wilson',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-06T08:00:00Z',
        isForSale: true,
        status: 'Rent',
      },
      {
        imageUrl:
          'https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg',
        description: 'Affordable apartment with great amenities',
        price: 120000,
        id: 6,
        title: 'Affordable Apartment',
        type: 'Apartment',
        numOfRooms: 1,
        numOfBathrooms: 1,
        area: 600,
        address: '333 Cedar St',
        ownerName: 'Sarah Davis',
        ownerImageUrl:
          'https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21971.jpg',
        postAddedTime: '2024-05-05T14:00:00Z',
        isForSale: false,
        status: 'Sale',
      },
    ];
  }

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
