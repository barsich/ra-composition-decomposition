/**
 * Список переключателей типа новостей
 */

import SwitcherItem from './SwitcherItem';

export default function NewsSwitcher({ types }) {
  return (
    <ul className="news__switchers">
      {types.map((type, index) => (
        <SwitcherItem type={type} key={index} />
      ))}
    </ul>
  );
}
