import React, { Component } from 'react';

import convertCurrency from './api';

import Inputs from './components/Inputs';
import Results from './components/Results';

class App extends Component {
  state = { 
    fromCurrency: '',
    toCurrency: '',
    amount: 0,
    convertedAmount: 0,
    countries: [],
  }

  calculate = (fromCurrency, toCurrency, amount) => {
    convertCurrency(fromCurrency, toCurrency, amount)
      .then(({ convertedAmount, countries }) => {
        this.setState({ fromCurrency, toCurrency, amount, convertedAmount, countries });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Inputs calculate={this.calculate} />
        <Results data={this.state} />
      </div>
    )
  }
}

export default App;