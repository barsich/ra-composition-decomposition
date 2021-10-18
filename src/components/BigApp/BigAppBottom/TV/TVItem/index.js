/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Элемент блока "ТВ-программа"
 */

export default function TVItem({ item }) {
  const { time, name, channel } = item;
  return (
    <li className="tv-programme__item bigapp-bottom__list-item">
      <span className="tv-programme__item__time">{time}</span>
      <span>
        <a href="#" className="tv-programme__item__name">
          {name}
        </a>
        <a href="#" className="tv-programme__item__channel">
          {channel}
        </a>
      </span>
    </li>
  );
}
