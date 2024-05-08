import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
class AddressesService {

  items: any[]=[]; // Declare an array to hold the items
  extractedData: any[] = []; // Declare an array to hold the extracted data

  private apiUrl = 'https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs';
  constructor(private http: HttpClient) { }

  getGovernorate(): Observable<any[]> {
    return this.http.get<object[]>(this.apiUrl);
  }

  fetchData() {
    this.getGovernorate().subscribe(
        (data) => {
          this.items = data; // Assign the fetched data to the items array
          this.extractData(); // Call the method to extract the required data
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
  extractData() {
    this.items.forEach(item => {
      const extractedItem = {
        id: item.id,
        //namePrimaryLang: item.namePrimaryLang,
        cityDataModels: item.cityDataModels.map((city:any) => city.namePrimaryLang)
      };
      this.extractedData.push(extractedItem);
    });
    console.log('Extracted Data:', this.extractedData);
  }

}
