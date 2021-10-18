import { searchExamples, searchTypes } from '../../../fakeData';
import Logo from './Logo';
import SearchExamples from './SearchExamples';
import SearchField from './SearchField';
import SearchTypesSwitcher from './SearchTypesSwitcher';

/**
 * Центральный блок страницы
 */

export default function BigAppMiddle() {
  return (
    <div className="bigapp-middle">
      <Logo />
      <SearchTypesSwitcher types={searchTypes} />
      <SearchField />
      <SearchExamples examples={searchExamples} />
    </div>
  );
}
