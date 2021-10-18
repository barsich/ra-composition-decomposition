/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Блок "Эфир"
 */

 import BroadcastsItem from "./BroadcastsItem";

 export default function Broadcasts({ list }) {
   return (
     <div className="broadcasts">
       <a href="#" className="broadcasts__title bigapp-bottom__title">
         Эфир
       </a>
       <ul className="broadcasts__list bigapp-bottom__list">
         {list.map((item, index) => (
           <BroadcastsItem item={item} key={index} />
         ))}
       </ul>
     </div>
   );
 }
 