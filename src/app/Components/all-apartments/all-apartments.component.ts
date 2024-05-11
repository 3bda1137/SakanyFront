import { Component } from '@angular/core';
import { IApartment } from '../../Interfaces/iapartment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RentSaleDirectiveDirective } from '../../directives/rent-sale-directive.directive';
import { PriceColorDirectiveDirective } from '../../directives/price-color-directive.directive';

@Component({
  selector: 'app-all-apartments',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RentSaleDirectiveDirective,
    PriceColorDirectiveDirective,
  ],
  templateUrl: './all-apartments.component.html',
  styleUrl: './all-apartments.component.css',
})
export class AllApartmentsComponent {
  test: string = '';
  Istrue: boolean = false;
  numOfBedroomsRange: number[];

  allApartments: IApartment[] = [];

  constructor() {
    this.numOfBedroomsRange = Array.from({ length: 7 }, (_, i) => i + 1);

    this.allApartments = [
      {
        imageUrl:
          'https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg',
        description: 'Beautiful apartment with stunning views',
        price: 200000,
        id: 1,
        name: 'Luxury Apartment',
        type: 'Apartment',
        numOfBedrooms: 3,
        numOfBathrooms: 2,
        Area: 1500,
        address: '123 Main St',
        ownerName: 'John Doe',
        ownerImageUrl:
          'https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21971.jpg',
        postAddedTime: '2024-05-10T12:00:00Z',
        isForSale: false,
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Cozy apartment in a quiet neighborhood',
        price: 150000,
        id: 2,
        name: 'Cozy Apartment',
        type: 'Apartment',
        numOfBedrooms: 2,
        numOfBathrooms: 1,
        Area: 1000,
        address: '456 Elm St',
        ownerName: 'Jane Smith',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-09T09:00:00Z',
        isForSale: true,
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Spacious apartment with modern amenities',
        price: 180000,
        id: 3,
        name: 'Modern Apartment',
        type: 'Apartment',
        numOfBedrooms: 2,
        numOfBathrooms: 2,
        Area: 1200,
        address: '789 Oak St',
        ownerName: 'Mike Johnson',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-08T15:00:00Z',
        isForSale: false,
      },
      {
        imageUrl:
          'https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg',
        description: 'Charming apartment with vintage charm',
        price: 170000,
        id: 4,
        name: 'Charming Apartment',
        type: 'Apartment',
        numOfBedrooms: 1,
        numOfBathrooms: 1,
        Area: 800,
        address: '101 Pine St',
        ownerName: 'Emily Brown',
        ownerImageUrl:
          'https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21971.jpg',
        postAddedTime: '2024-05-07T10:00:00Z',
        isForSale: false,
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Cozy apartment in a quiet neighborhood',
        price: 150000,
        id: 2,
        name: 'Cozy Apartment',
        type: 'Apartment',
        numOfBedrooms: 2,
        numOfBathrooms: 1,
        Area: 1000,
        address: '456 Elm St',
        ownerName: 'Jane Smith',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-09T09:00:00Z',
        isForSale: true,
      },
      {
        imageUrl:
          'https://images1.apartments.com/i2/rq9CFONaiQbI4DDIohVhzNrGwfAS9kT4hnHrwV4axHQ/117/image.jpg',
        description: 'Elegant apartment in a prestigious neighborhood',
        price: 250000,
        id: 5,
        name: 'Elegant Apartment',
        type: 'Apartment',
        numOfBedrooms: 4,
        numOfBathrooms: 3,
        Area: 2000,
        address: '222 Maple St',
        ownerName: 'David Wilson',
        ownerImageUrl:
          'https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg',
        postAddedTime: '2024-05-06T08:00:00Z',
        isForSale: true,
      },
      {
        imageUrl:
          'https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg',
        description: 'Affordable apartment with great amenities',
        price: 120000,
        id: 6,
        name: 'Affordable Apartment',
        type: 'Apartment',
        numOfBedrooms: 1,
        numOfBathrooms: 1,
        Area: 600,
        address: '333 Cedar St',
        ownerName: 'Sarah Davis',
        ownerImageUrl:
          'https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21971.jpg',
        postAddedTime: '2024-05-05T14:00:00Z',
        isForSale: false,
      },
    ];
  }

  selectedGov(name: string) {
    console.log(name);
  }
  selectedCity(name: string) {
    console.log(name);
  }
  selectedRooms(numOfRooms: any) {
    let num: number = Number(numOfRooms);
    console.log(num);
  }
  priceRange(price: any) {
    console.log(price);
  }

  // TrackBy function ->
  propertyTrackBy(index: number, apartment: IApartment): number {
    return apartment.id;
  }
}
