import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { SigninComponent } from './Components/signin/signin.component';
import { RegisterComponent } from './Components/register/register.component';
import { DetailesComponent } from './Components/detailes/detailes.component';

export const routes: Routes = [
    {path:" " ,redirectTo:"home", pathMatch:'full'},
    {path:"home" ,component:HomeComponent},
    {path:"details" ,component:DetailesComponent},
    {path:"login" ,component:SigninComponent},
    {path:"register" ,component:RegisterComponent},
    {path:"**" ,component:NotfoundComponent},
];
