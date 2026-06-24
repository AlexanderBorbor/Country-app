import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-country-search',
  imports: [],
  templateUrl: './country-search.html',
})
export class CountrySearchComponent {

  toSearch = output<string>()

  placeHolder = input('Buscar')

  addCountry(query: string){

    const textSearch = signal(query);
    this.toSearch.emit(textSearch())
  }
}
