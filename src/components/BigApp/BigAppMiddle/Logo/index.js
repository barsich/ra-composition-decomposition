/**
 * Блок с логотипом
 */

import { logoImage } from "../../../../fakeData";

export default function Logo() {
  return <img src={logoImage} className="bigapp__logo" alt="bigapp logo"></img>;
}
