import * as React from 'react';
import { observer } from 'mobx-react';
import CountryModel from './CountryModel';

interface Props {
    model: CountryModel;
}

@observer
export class CountrylistItem extends React.Component<Props, {}> {

    render() {
        return (
            <React.Fragment>
                <div className="country-name">{this.props.model.name}</div>
                <div className="country-nativename">{this.props.model.nativeName}</div>
            </React.Fragment>
        );
    }
}

export default CountrylistItem;
