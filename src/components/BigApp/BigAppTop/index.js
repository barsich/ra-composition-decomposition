import News from './News';
import OurServiceAd from './OurServiceAd';
import {ourServices} from '../../../fakeData'

/**
 * Верхний блок страницы
 */

export default function BigAppTop() {
  return (
    <div className="bigapp-top">
      <News />
      <OurServiceAd service={ourServices[0]}/>
    </div>
  );
}
