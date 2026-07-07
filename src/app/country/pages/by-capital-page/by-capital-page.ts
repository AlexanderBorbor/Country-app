import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search";
import { CountryListComponent } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { CountryItems } from '../../interfaces/country.interfaces';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-capital-page.html'
})
  export class ByCapitalPageComponent {

     countryService = inject(CountryService)

     query = signal('');

     countryResource = resource({
      params: () => ({ query: this.query()}),
      loader: async({params}) => {
        if( !params.query ) return [];
        return await firstValueFrom(this.countryService.searchByCapital(params.query))
        }
      });
    }

    //Codigo reciclado
    /*
     // isLoading = signal(false);

    // isError = signal<String|null>(null);

    // //Aqui almacena la arrya de objetos
    // countries = signal<CountryItems[]>([])

    //   onSearch(query: string) {

        // if(this.isLoading()) return;

        // this.isLoading.set(true);
        // this.isError.set(null);

        // this.countryService.searchByCapital(query).subscribe({
        //   next: (resp) => {
        //   console.log("next")

        //   if(resp.length === 0) {
        //     this.countries.set([]);
        //     this.isError.set(`No se encontro el query ${query}`)
        //   }
        //   this.isLoading.set(false);
        //   this.countries.set(resp)
        //   console.log(resp);
        //   },
        //   error:(err)  => {
        //     console.log("Err")
        //     this.isLoading.set(false);
        //     this.countries.set([])
        //     this.isError.set(err)
        //   },
        // })

    */
