import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { SigninComponent } from './Components/signin/signin.component';
import { RegisterComponent } from './Components/register/register.component';
import { DetailesComponent } from './Components/detailes/detailes.component';
import { PropertyComponent } from './Components/property/property.component';

export const routes: Routes = [
<<<<<<< HEAD
    {path:" " ,redirectTo:"home", pathMatch:'full'},
    {path:"home" ,component:HomeComponent},
    {path:"details" ,component:DetailesComponent},
    {path:"login" ,component:SigninComponent},
    {path:"register" ,component:RegisterComponent},
    {path:"**" ,component:NotfoundComponent},
=======
    { path: " ", redirectTo: "home", pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "details", component: DetailesComponent },
    { path: "signin", component: SigninComponent },
    { path: "register", component: RegisterComponent },
    //test
    { path: "property", component: PropertyComponent },
    { path: "**", component: NotfoundComponent },
>>>>>>> e83a1c56466b9576919b0861a5a1d2f583a446a9
];
