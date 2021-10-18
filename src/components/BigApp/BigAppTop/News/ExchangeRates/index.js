/**
 * Курсы валют
 */

import ExchangeRatesItem from './ExchangeRatesItem';

export default function ExchangeRates({ rates }) {
  return (
    <ul className="exchange-rates">
      {rates.map((currency) => (
        <ExchangeRatesItem currency={currency} key={currency.type} />
      ))}
    </ul>
  );
}
