import { broadcasts, map, services, tv, weather } from '../../../fakeData';
import Broadcasts from './Broadcasts';
import Featured from './Featured';
import Map from './Map';
import TV from './TV';
import Weather from './Weather';

/**
 * Нижний блок страницы
 */

export default function BigAppBottom() {
  return (
    <div className="bigapp-bottom">
      <Weather forecast={weather} />
      <Featured list={services} />
      <Map map={map} />
      <TV programme={tv} />
      <Broadcasts list={broadcasts} />
    </div>
  );
}
