import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CountryItems } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
})
export class CountryListComponent {

  countries = input.required<CountryItems[]>()
}
