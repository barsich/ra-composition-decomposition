/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Блок ТВ-программы
 */

import TVItem from "./TVItem";

export default function TV({ programme }) {
  return (
    <div className="tv-programme">
      <a href="#" className="tv-programme__title bigapp-bottom__title">
        Телепрограмма
      </a>
      <ul className="tv-programme__list bigapp-bottom__list">
        {programme.map((item, index) => (
          <TVItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
