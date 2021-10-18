/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Погодный блок
 */

export default function Weather({ forecast }) {
  const { morning, afternoon, evening, unit, icon } = forecast;
  return (
    <div className="weather">
      <a href="#" className="weather__title bigapp-bottom__title">
        Погода
      </a>
      <div className="weather-content">
        <div className="weather-now">
          <img src={icon} alt="weather-icon" />
          <p>{afternoon}{unit}</p>
        </div>
        <div className="weather-forecast">
          Утром {morning}, <br />
          Вечером {evening}
        </div>
      </div>
    </div>
  );
}
