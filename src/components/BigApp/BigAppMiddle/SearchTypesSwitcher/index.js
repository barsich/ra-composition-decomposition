import SearchTypesSwitcherItem from "./SearchTypesSwitcherItem";

/**
 * Переключатель типа поиска
 */

export default function SearchTypesSwitcher({types}) {
  return (
    <ul className="search__switchers">
      {types.map((type, index) => (
        <SearchTypesSwitcherItem type={type} key={index} />
      ))}
    </ul>
  );
}
