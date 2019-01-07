import * as React from 'react';
import { Countries } from './Countries/Countries';
import './Theme.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to the sample app!</header>
        <p className="App-intro" />
        <Countries header="test" />
      </div>
    );
  }
}

export default App;
