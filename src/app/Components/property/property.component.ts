import { Component, NgModule, OnInit } from '@angular/core';
import { GovernorateService } from '../../Services/governorate.service';
import { Governorate } from '../../Interfaces/governorate';
import { CommonModule } from '@angular/common';
import { City } from '../../Interfaces/city';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Property } from '../../Interfaces/property';
import { PropertyService } from '../../Services/property.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NgxSpinnerModule } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule]
})
export class PropertyComponent {

  governorates: Governorate[] = [];
  cities: City[] = [];
  images: any = [];
  checkedFeatureNames: string[] = [];
  isPanar: boolean = false;
  image: any;
  selectedFile: File = new File([], '');
  fileData = new FormData();
  allData!: Property;

  image1: string | ArrayBuffer | null = null;
  image2: string | ArrayBuffer | null = null;
  image3: string | ArrayBuffer | null = null;
  image4: string | ArrayBuffer | null = null;



  constructor(
    private _GovernorateService: GovernorateService,
    private http: HttpClient,
    private _PropertyService: PropertyService,
    private spinner: NgxSpinnerService) {
    this._GovernorateService.getGovernorates().subscribe({
      next: (response) => {
        console.log(response.data);
        this.governorates = response.data;
        console.log(this.governorates)
      }
    })
    this.initializeFeatures();
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
  propertyFeatures: { id: string, name: string, control: FormControl }[] = [];

  initializeFeatures(): void {
    this.propertyFeatures = [
      { id: 'check-a', name: 'Air Conditioning', control: new FormControl(false) },
      { id: 'check-b', name: 'Swimming Pool', control: new FormControl(false) },
      { id: 'check-c', name: 'Central Heating', control: new FormControl(false) },
      { id: 'check-d', name: 'Laundry Room', control: new FormControl(false) },
      { id: 'check-e', name: 'Gym', control: new FormControl(false) },
      { id: 'check-g', name: 'Alarm', control: new FormControl(false) },
      { id: 'check-h', name: 'Window Covering', control: new FormControl(false) },
      { id: 'check-i', name: 'Refrigerator', control: new FormControl(false) },
      { id: 'check-j', name: 'TV Cable & WIFI', control: new FormControl(false) },
      { id: 'check-k', name: 'Microwave', control: new FormControl(false) }
    ];
  }
  addProperty: FormGroup = new FormGroup({
    Title: new FormControl(null, [Validators.required]),
    Description: new FormControl(null, [Validators.required, Validators.minLength(400)]),
    Status: new FormControl(null, [Validators.required]),
    Type: new FormControl(null, [Validators.required]),
    RoomsNumber: new FormControl(null, [Validators.required]),
    BathroomNumber: new FormControl(null, [Validators.required]),
    Age: new FormControl(null, [Validators.required]),
    Price: new FormControl(null, [Validators.required]),
    Area: new FormControl(null, [Validators.required]),
    Governorate: new FormControl(null, [Validators.required]),
    City: new FormControl(null, [Validators.required]),
    Name: new FormControl(null, [Validators.required]),
    UserName: new FormControl("abdallah123", [Validators.required]),
    Phone: new FormControl(null, [Validators.required]),
    Email: new FormControl("aaa@gmail.com", [Validators.required]),
    Image1: new FormControl(null, [Validators.required]),
    Image2: new FormControl(null, [Validators.required]),
    Image3: new FormControl(null, [Validators.required]),
    Image4: new FormControl(null, [Validators.required]),
  })

  onChange(event: any) {
    if (event.target.value != null) {
      this._GovernorateService.getCitiesInGovernorateId(event.target.value).subscribe({
        next: (response) => {
          this.cities = response.data;
        },
        error: (err) => {
          this.cities = [];
        }
      })
    }
  }

  logCheckedFeatures(): string[] {
    const checkedFeatures = this.propertyFeatures.filter(feature => feature.control.value);
    return checkedFeatures.map(feature => feature.name);
  }

  onFileChange(event: any) {
    console.log("-------------onFileChange-----------")
    console.log(event.target.id)
    let reader = new FileReader();
    this.selectedFile = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      if (event.target.id == 'file1') {
        this.image1 = reader.result;
      }
      else if (event.target.id == 'file2') {
        this.image2 = reader.result;
      }
      else if (event.target.id == 'file3') {
        this.image3 = reader.result;
      }
      else if (event.target.id == 'file4') {
        this.image4 = reader.result;
      }

      this.images.push(reader.result);
      this.fileData.append('file', this.selectedFile, this.selectedFile.name);
    };
  }

  submitNewProperty() {
    this.isPanar = true;
    this.spinner.show();
    console.log("---------checkedFeatureNames---------")
    const checkedFeatureNames = this.logCheckedFeatures();
    console.log(checkedFeatureNames);
    const formData = {
      Title: this.addProperty.get('Title')?.value || '',
      Description: this.addProperty.get('Description')?.value || '',
      Status: this.addProperty.get('Status')?.value || '',
      Type: this.addProperty.get('Type')?.value || '',
      RoomsNumber: this.addProperty.get('RoomsNumber')?.value || 0,
      Price: this.addProperty.get('Price')?.value || 0,
      Area: this.addProperty.get('Area')?.value || 0,
      Governorate: this.addProperty.get('Governorate')?.value || '',
      City: this.addProperty.get('City')?.value || '',
      Age: this.addProperty.get('Age')?.value || '',
      BathroomNumber: this.addProperty.get('BathroomNumber')?.value || 0,
      Name: this.addProperty.get('Name')?.value || '',
      UserName: this.addProperty.get('UserName')?.value || '',
      Email: this.addProperty.get('Email')?.value || '',
      Phone: this.addProperty.get('Phone')?.value || '',
      featsures: checkedFeatureNames,
    };
    this._PropertyService.addProperty(formData)
      .subscribe({
        next: (response) => {
          console.log("----------response of Add Property------------")
          console.log(response)
          if (response.success == true) {
            //send images 
            this._PropertyService.addDependency(this.fileData, response.data).subscribe({
              next: (res) => {
                this.isPanar = false;
                this.spinner.hide();
                Swal.fire({
                  title: "The property has been added successfully",
                  showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                  },
                  hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                  }
                });
                console.log(res)
              },
              error: (err) => {
                this.isPanar = false;
                this.spinner.hide();
                console.log(err)
              }
            })
          }
        },
        error: (error) => {
          console.error(error);
          this.isPanar = false;
          this.spinner.hide();
        }
      });
  }
}
