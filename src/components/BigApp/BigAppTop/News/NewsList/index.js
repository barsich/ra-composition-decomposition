/**
 * Список новостей
 */

import NewsListItem from './NewsListItem';

export default function NewsList({ news }) {
  return (
    <ul className="news__list">
      {news.map((item) => (
        <NewsListItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
