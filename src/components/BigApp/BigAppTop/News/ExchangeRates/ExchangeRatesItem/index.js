/**
 * Элемент блока курса валют
 */

export default function ExchangeRatesItem({ currency }) {
  const { type, value, change } = currency;
  return (
    <li className="exchange-rates__item">
      <span className="exchange-rates__type">{type}</span>
      <span className="exchange-rates__value">{value}</span>
      <span className="exchange-rates__change">{change}</span>
    </li>
  );
}
