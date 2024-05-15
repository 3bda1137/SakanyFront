import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HomePagePropertiesService } from '../../Services/home-page-properties.service';
import { IApartment } from '../../Interfaces/iapartment';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  apartments: IApartment[] = [];
  imageUrls: string[] = [];

  constructor(
    private router: Router,
    private homePagePropertiesService: HomePagePropertiesService
  ) {}

  ngOnInit(): void {
    this.getHomePageProperties();
  }
  getHomePageProperties(): void {
    this.homePagePropertiesService.getRandomProp(5).subscribe({
      next: (response) => {
        console.log(response.data.properties);
        const apiUrl = 'http://localhost:5019';
        this.apartments = response.data.properties;

        this.apartments.forEach((apartment) => {
          apartment.imageUrl = `${apiUrl}${apartment.imageUrl}`;
        });

        this.imageUrls = this.apartments.map((apartment) => apartment.imageUrl);
        console.log(this.imageUrls);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  imgUrlTrack(index: number, url: string) {
    return url;
  }

  gotoAllApartments(): void {
    this.router
      .navigateByUrl('/AllApartments')
      .then(() => window.scrollTo(0, 0));
  }
}
