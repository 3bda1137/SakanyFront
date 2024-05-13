import { Component, OnInit } from '@angular/core';
import { IApartment } from '../../Interfaces/iapartment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RentSaleDirectiveDirective } from '../../directives/rent-sale-directive.directive';
import { PriceColorDirectiveDirective } from '../../directives/price-color-directive.directive';
import { Governorate } from '../../Interfaces/governorate';
import { City } from '../../Interfaces/city';
import { GovernorateService } from './../../Services/governorate.service';
import { ShowAllPropertiesService } from './../../Services/show-all-properties.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-all-apartments',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RentSaleDirectiveDirective,
    PriceColorDirectiveDirective,
    NgxPaginationModule,
  ],
  templateUrl: './all-apartments.component.html',
  styleUrls: ['./all-apartments.component.css'],
})
export class AllApartmentsComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  startPage: number = 1;
  endPage: number = 1;
  pageSize: number = 6;
  totalItems: number = 0;
  pageSizeOptions: number[] = [6, 12, 24];

  pageNum: number = 1;
  numOfRooms: number = 0;
  priceRange: string = 'all';
  govId: number = 0;
  cityId: number = 0;
  governorate: Governorate[] = [];
  cities: City[] = [];
  foundedCities: boolean = true;
  allApartments: IApartment[] = [];
  arrow_bgImage: string = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15.5l-7-9h14l-7 9z" fill="%233a3a3a"/></svg>')`;

  constructor(
    private showAllPropertiesService: ShowAllPropertiesService,
    private governorateService: GovernorateService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.governorateService.getGovernorates().subscribe({
      next: (response) => {
        this.governorate = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  fetchData(): void {
    this.showAllPropertiesService
      .getAllProperties(
        this.pageNum,
        this.pageSize,
        this.numOfRooms,
        this.priceRange,
        this.govId,
        this.cityId
      )
      .subscribe({
        next: (response) => {
          console.log(response.data.paginationInfo);
          this.allApartments = response.data.properties;

          // Extract pagination info
          this.currentPage = response.data.paginationInfo.currentPage;
          this.totalPages = response.data.paginationInfo.totalPages;
          this.startPage = response.data.paginationInfo.startPage;
          this.endPage = response.data.paginationInfo.endPage;
          this.totalItems = response.data.paginationInfo.total;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  selectedGov(id: any): void {
    this.govId = Number(id);
    this.fetchData();
  }

  selectedCity(id: any): void {
    this.cityId = Number(id);
    this.fetchData();
  }

  selectedRooms(numOfRooms: any): void {
    this.numOfRooms = Number(numOfRooms);
    this.fetchData();
  }

  selectedPriceRange(price: string): void {
    this.priceRange = price;
    this.fetchData();
  }

  onChange(event: any): void {
    if (event.target.value !== null) {
      this.governorateService
        .getCitiesInGovernorateId(event.target.value)
        .subscribe({
          next: (response) => {
            this.cities = response.data;
            this.foundedCities = true;
          },
          error: (err) => {
            this.foundedCities = false;
            this.cities = [];
          },
        });
    }
  }

  propertyTrackBy(index: number, apartment: IApartment): number {
    return apartment.id;
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageNum = page;
      this.fetchData();
    }
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = this.startPage; i <= this.endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
}
