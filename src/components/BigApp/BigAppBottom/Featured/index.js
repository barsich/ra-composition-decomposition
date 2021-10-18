/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Блок "Посещаемое"
 */

import FeaturedItem from './FeaturedItem';

export default function Featured({ list }) {
  return (
    <div className="featured">
      <a href="#" className="featured__title bigapp-bottom__title">
        Посещаемое
      </a>
      <ul className="featured__list bigapp-bottom__list">
        {list.map((item, index) => (
          <FeaturedItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
