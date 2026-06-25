import { Component, input } from '@angular/core';
import {  RESTcountries } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryListComponent {

  countries = input.required<RESTcountries[]>()
}
