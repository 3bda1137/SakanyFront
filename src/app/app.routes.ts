import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { SigninComponent } from './Components/signin/signin.component';
import { RegisterComponent } from './Components/register/register.component';
import { DetailesComponent } from './Components/detailes/detailes.component';
import { PropertyComponent } from './Components/property/property.component';
import { AllApartmentsComponent } from './Components/all-apartments/all-apartments.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { MypropertiesComponent } from './Components/myproperties/myproperties.component';
import { FavouriteComponent } from './Components/favourite/favourite.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
export const routes: Routes = [
  { path: ' ', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailesComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  //test

  {
    path: 'LayOut',
    component: LayoutComponent,
    children: [
      { path: 'property', component: PropertyComponent },
      { path: 'Myproperties', component: MypropertiesComponent },
      { path: 'Favourite', component: FavouriteComponent },
      { path: 'Dashbord', component: DashbordComponent },
    ],
  },

  { path: '**', component: NotfoundComponent },
];
