import { renderCard, cardsArr, checkCard } from './card.js';
import { onPriceOfType, onTimeIn,  onTimeOut, toInactiveForm, formValidation } from './form.js';
import  { getMap, currentPosMarker }  from './map.js';
const selectRooms = document.querySelector('#room_number');


toInactiveForm();
getMap();
currentPosMarker();





// cardsArr.forEach((element) => {
//   renderCard(element.author, element.offer);
//   console.log(element);});

console.log(cardsArr);

formValidation(selectRooms);

