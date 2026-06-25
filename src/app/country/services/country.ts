import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {RESTcountries } from '../interfaces/rest-countries.interfaces';

const API_URL = 'https://api.restcountries.com/countries/v5'
const token = 'rc_live_17f8c22fcd35486fad13306feb7e9d67'

@Injectable({
  providedIn: 'root',
})
  export class CountryService {

    private http = inject(HttpClient);

    //Peticicon http
    searchByCapital(query: string){
      query = query.toLowerCase();

      return this.http.get<RESTcountries[]>(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }, params: {
          q: query
        }
      })
    }
  }



