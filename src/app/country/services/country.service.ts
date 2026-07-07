import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {RESTcountries } from '../interfaces/rest-countries.interfaces';
import { catchError, map, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

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

      return this.http.get<RESTcountries>(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }, params: {
          q: query
        }
      }).pipe(
        map(resp => CountryMapper.mapRestCountryToArray(resp.data.objects)),
      catchError(error => {
        console.log('Error fetching' ,error)
        return throwError( () => new Error(`No ha mandado nada`))
      })
      )
    };
  }



