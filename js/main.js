import {  toInactiveForm, formValidation, setUserFormSubmit } from './form.js';
import  { getMap, currentPosMarker }  from './map.js';
const selectRooms = document.querySelector('#room_number');


toInactiveForm();
getMap();
currentPosMarker();
formValidation(selectRooms);
setUserFormSubmit();

