import { Component, inject, signal } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search";
import { CountryListComponent } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country';
import {  RESTcountries } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-capital-page.html'
})
  export class ByCapitalPageComponent {

    countryService = inject(CountryService)

    isLoading = signal(false);

    isError = signal<String|null>(null);

    //Aqui almacena la arrya de objetos
    countries = signal<RESTcountries[]>([])

      onSearch(query: string) {
        if(this.isLoading()) return;

        this.isLoading.set(true);
        this.isError.set(null)

        this.countryService.searchByCapital(query).subscribe( resp => {

          this.isLoading.set(false);
          this.countries.set(resp)
          console.log(resp);
        })
    }
  }
