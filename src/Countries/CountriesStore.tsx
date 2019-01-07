import CountryModel from './CountryModel';
import { observable } from 'mobx';

export class CountriesStore {
  @observable isLoaded: boolean = false;
  @observable response: CountryModel[] = [];

  constructor() {
    this.loadCountries();
  }

  public async loadCountries() {
    let url = 'https://restcountries.eu/rest/v2/all';

    this.response = await fetch(url).then(res => res.json());
    this.isLoaded = true;
  }
}

export default CountriesStore;
