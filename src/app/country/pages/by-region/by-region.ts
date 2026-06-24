import { Component } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search";
import { CountryListComponent } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-region',
  // imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-region.html',
})
export class ByRegionComponent {}
