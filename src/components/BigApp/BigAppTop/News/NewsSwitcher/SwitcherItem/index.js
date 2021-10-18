/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Переключатель типа новостей
 */

export default function SwitcherItem({ type }) {
  return <li className="news__switchers__item"><a href="#">{type}</a></li>;
}
