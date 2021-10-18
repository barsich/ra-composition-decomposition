/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Блок с картой и расписаниями
 */

export default function Map({ map }) {
  const { location, schedule } = map;
  return (
    <div className="map">
      <a href="#" className="map__title bigapp-bottom__title">
        {location}
      </a>
      <a href="#" className="map__link">
        {schedule}
      </a>
    </div>
  );
}
