import React, { useState } from 'react';

const Input = ({ calculate }) => {
  const [ fromCurrency, setFromCurrency ] = useState('');
  const [ toCurrency, setToCurrency ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const handleSubmit = (event) => {
    calculate(fromCurrency.toUpperCase(), toCurrency.toUpperCase(), amount);

    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="From currency"
          type="text"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
        <input 
          placeholder="To currency"
          type="text"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
        <input 
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Input;
