import getCountries from './getCountries';
import getExchangeRate from './getExchangeRate';

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  let exchangeRate;
  let countries;

  await Promise.all([getExchangeRate(fromCurrency, toCurrency), getCountries(toCurrency)])
    .then(([exchangeRateValue, countriesValue]) => {
      exchangeRate = exchangeRateValue;
      countries = countriesValue;
    });

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return { convertedAmount, countries };
};

export default convertCurrency;