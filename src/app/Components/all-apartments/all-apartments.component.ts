import { GovernorateService } from './../../Services/governorate.service';
import { ShowAllPropertiesService } from './../../Services/show-all-properties.service';
import { Component } from '@angular/core';
import { IApartment } from '../../Interfaces/iapartment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RentSaleDirectiveDirective } from '../../directives/rent-sale-directive.directive';
import { PriceColorDirectiveDirective } from '../../directives/price-color-directive.directive';
import { Governorate } from '../../Interfaces/governorate';
import { City } from '../../Interfaces/city';

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
  governorates: Governorate[] = [];
  cities: City[] = [];
  foundedCities: boolean = true;
  allApartments: IApartment[] = [];
  arrow_bgImage: string = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15.5l-7-9h14l-7 9z" fill="%233a3a3a"/></svg>')`;
  constructor(
    private ShowAllPropertiesService: ShowAllPropertiesService,
    private GovernorateService: GovernorateService
  ) {
    this.allApartments = ShowAllPropertiesService.getAllProperties();

    this.GovernorateService.getGovernorates().subscribe({
      next: (response) => {
        this.governorates = response.data;
      },
    });
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

  onChange(event: any) {
    if (event.target.value != null) {
      this.GovernorateService.getCitiesInGovernorateId(
        event.target.value
      ).subscribe({
        next: (response) => {
          this.cities = response.data;
          this.foundedCities = true;
          console.log(response.data);
        },
        error: (err) => {
          this.foundedCities = false;
          this.cities = [];
        },
      });
    }
  }
}
