import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { LocationsComponent } from './locations/locations.component';
import { CountriesComponent } from './countries/countries.component';
import {ParametersComponent} from './parameters/parameters.component';
import{LatestComponent} from './latest/latest.component';
import { ErrorComponent } from './error/error.component'

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'cities',component:CitiesComponent},
  {path:'locations',component:LocationsComponent},
  {path:'countries',component:CountriesComponent},
  {path:'parameters',component:ParametersComponent},
  {path:'latest',component:LatestComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',redirectTo:'error'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }