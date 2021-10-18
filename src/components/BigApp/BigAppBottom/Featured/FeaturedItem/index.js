/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Элемент блока "Посещаемое"
 */

export default function FeaturedItem({ item }) {
  return (
    <li className="featured__item bigapp-bottom__list-item">
      <a href="#" className="featured__item__link">
        {item}
      </a>
    </li>
  );
}
