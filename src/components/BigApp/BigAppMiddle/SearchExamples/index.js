/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Примеры поиска
 */

export default function SearchExamples({ examples }) {
  const randomExample = examples[Math.floor(Math.random() * examples.length)];
  return (
    <p className="search__examples">
      Найдется всё. Например, <a href="#">{randomExample}</a>
    </p>
  );
}
