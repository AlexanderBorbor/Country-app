import { Component } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search";
import { CountryListComponent } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchComponent],
  templateUrl: './by-country.html',
})
export class ByCountryComponent {}
