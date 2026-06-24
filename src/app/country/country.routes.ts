import { Component } from '@angular/core';
import { Routes } from "@angular/router";
import { CountryLayoutComponent } from "./layout/countryLayout/countryLayout";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page";
import { ByCountryComponent } from "./pages/by-country/by-country";
import { ByRegionComponent } from './pages/by-region/by-region';
import { CountryPageComponent } from './pages/country-page/country-page';


export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: 'by-country',
        component: ByCountryComponent
      },
      {
        path: 'by-region',
        component: ByRegionComponent
      },
      {
        path: 'by/:code',
        component: CountryPageComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }
];

export default countryRoutes;
