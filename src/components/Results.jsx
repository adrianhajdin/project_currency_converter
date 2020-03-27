import React from 'react'

const Results = ({ data: { fromCurrency, toCurrency, amount, convertedAmount, countries }}) => {
  const message = `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
  
  return (
    <div>
        <h1>From currency: {fromCurrency}</h1>
        <h1>To currency: {toCurrency}</h1>
        <h1>Amount: {amount}</h1>
        <h1>Converted Amount: {convertedAmount}</h1>
        {/* <h1>Countries: {countries}</h1> */}
        <h1>{convertedAmount ? message : null}</h1>
    </div>
  )
}

export default Results;
