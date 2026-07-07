import { CountryItems } from "../interfaces/country.interfaces";
import { Country } from "../interfaces/rest-countries.interfaces";

  export class CountryMapper {
    //Aqui recibiremos la array de objetos y va a devolver nuestra interface
  static mapRestCountrytoCountry(country: Country): CountryItems {
    return {
      uuid: country.uuid,
      flagEmoji: country.flag.emoji,
      flagUrl: country.flag.url_svg,
      nameCommmon: country.names.translations["spa"].common ?? "No hay español",
      capitalName: country.capitals[0]?.name ?? 'No hay capital bro',
      population: country.population
    }
  }

  //Aqui hacemos la conversion de la array de country a la array de nuestra interface
  static mapRestCountryToArray(countries: Country[]): CountryItems[] {
    return countries.map( country => this.mapRestCountrytoCountry(country))
  }
}
