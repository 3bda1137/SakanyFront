import { Component } from '@angular/core';
import { GovernorateService } from '../../Services/governorate.service';
import { Governorate } from '../../Interfaces/governorate';
import { CommonModule } from '@angular/common';
import { City } from '../../Interfaces/city';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PropertyComponent {

  governorates: Governorate[] = []; // Use Governorate interface
  cities: City[] = [];
  constructor(private _GovernorateService: GovernorateService) {

    this._GovernorateService.getGovernorates().subscribe({
      next: (response) => {
        console.log(response.data);
        this.governorates = response.data;
        console.log(this.governorates)
      }
    })
  }
  onChange(event: any) {
    if (event.target.value != null) {
      this._GovernorateService.getCitiesInGovernorateId(event.target.value).subscribe({
        next: (response) => {
          console.log(response.data)
          this.cities = response.data;
        },
        error: (err) => {
          this.cities = [];
        }
      })
    }
  }


}
