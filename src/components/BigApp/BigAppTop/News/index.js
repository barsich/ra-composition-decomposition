import { currency, news, newTypes } from '../../../../fakeData';
import ExchangeRates from './ExchangeRates';
import NewsList from './NewsList';
import NewsSwitcher from './NewsSwitcher';

/**
 * Новостной блок страницы
 */

export default function News() {
  return (
    <div className="news">
      <NewsSwitcher types={newTypes} />
      <NewsList news={news} />
      <ExchangeRates rates={currency} />
    </div>
  );
}
