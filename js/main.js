import { getData } from './api.js';
import {  toInactiveForm, formValidation, setUserFormSubmit } from './form.js';
import  { getMap, currentPosMarker, renderCardList }  from './map.js';
import {showPreviewUploadPhoto} from './avatar.js';
import { changeFilters, renderTypeFilter,getFilter } from './filter.js';

const selectRooms = document.querySelector('#room_number');


toInactiveForm();
getMap();

getData((data)=> {
  renderCardList(data.slice(0, 10)); // добавление меток на карту
  // renderTypeFilter();
  changeFilters(()=> {
    const filteredData = getFilter(data);
    renderCardList(filteredData.slice(0, 10));
  })


});
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

// const typeFilter = mapFilters.querySelector('#housing-type');
