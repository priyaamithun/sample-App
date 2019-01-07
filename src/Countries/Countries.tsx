.import * as React from 'react';
import CountriesStore from './CountriesStore';
import { observer } from 'mobx-react';
import { CountrylistItem } from './CountrylistItem';
import './style.css';

interface Props {
  header: string;
}

@observer
export class Countries extends React.Component<Props, {}> {
  store = new CountriesStore();

  render() {

    if (!this.store.isLoaded) {
      return ('loading..');
    }
    return (
      <div className="country-list">
        list of countries: <br />
        {this.store.response.map(c => { return (<CountrylistItem key={c.name} model={c} />); }
        )}
      </div>
    );
  }
}

export default Countries;
