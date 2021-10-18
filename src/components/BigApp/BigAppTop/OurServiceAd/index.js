/**
 * Реклама внутреннего сервиса
 */

export default function OurServiceAd({ service }) {
  const { image, title, description, link } = service;
  return (
    <div className="our-service">
      <img src={image} alt="our service" />
      <h2>{title}</h2>
      <a href={link}>{description}</a>
    </div>
  );
}
