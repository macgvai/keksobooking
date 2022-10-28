import { renderCard, cardsArr, checkCard } from './card.js';
import { onPriceOfType, onTimeIn,  onTimeOut, toInactiveForm } from './form.js';
import  { getMap, currentPosMarker }  from './map.js';


toInactiveForm();
getMap();
currentPosMarker();





// cardsArr.forEach((element) => {
//   renderCard(element.author, element.offer);
//   console.log(element);});

console.log(cardsArr);

