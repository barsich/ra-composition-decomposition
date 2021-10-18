/**
 * Элемент блока новостей
 */

export default function NewsListItem({ item }) {
  const { icon, text, link } = item;
  return (
    <li className="news__list__item">
      <img src={icon} alt={text} />
      <a href={link}>{text}</a>
    </li>
  );
}
