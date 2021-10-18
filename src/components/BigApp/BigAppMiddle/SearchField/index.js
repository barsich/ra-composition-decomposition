/**
 * Поисковая строка
 */

export default function SearchField() {
  return (
    <form className="search-wrapper">
      <input type="text" className="search__input" />
      <button className="search__button">Найти</button>
    </form>
  );
}
