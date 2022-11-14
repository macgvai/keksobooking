import {  toInactiveForm, formValidation, setUserFormSubmit } from './form.js';
import  { getMap, currentPosMarker }  from './map.js';
import {showPreviewUploadPhoto} from './avatar.js';

const selectRooms = document.querySelector('#room_number');


toInactiveForm();
getMap();
currentPosMarker();
formValidation(selectRooms);
showPreviewUploadPhoto();


// const adForm = document.querySelector('.ad-form');

// const tryy = () => {}
// adForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   console.log(new FormData(evt.target));
// });
// tryy();

// const itsOK = () => {console.log('OK')};

setUserFormSubmit();

