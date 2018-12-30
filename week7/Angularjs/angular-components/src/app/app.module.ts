import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AirService } from './air.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { LocationsComponent } from './locations/locations.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';

import { ErrorComponent } from './error/error.component';

import { ParametersComponent } from './parameters/parameters.component';
import { LatestComponent } from './latest/latest.component';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    LocationsComponent,
    CountriesComponent,
    HomeComponent,
  
    ErrorComponent,
    ParametersComponent,
    LatestComponent,
    HomeViewComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }