/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Элемент блока "Эфир"
 */

import { playIcon } from '../../../../../fakeData';

export default function BroadcastsItem({ item }) {
  const { name, type } = item;
  return (
    <li className="broadcasts__item bigapp-bottom__list-item">
        <img src={playIcon} alt="play icon" className="broadcasts__item__icon" />
        <a href="#" className="broadcasts__item__name">{name} </a>
        <a href="#" className="broadcasts__item__type">{type}</a>
    </li>
  );
}
