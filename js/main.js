import { getData } from './api.js';
import {  toInactiveForm, formValidation, setUserFormSubmit } from './form.js';
import  { getMap, currentPosMarker, renderCardList }  from './map.js';
import {showPreviewUploadPhoto} from './avatar.js';
import { changeFilters, getFilter } from './filter.js';
import { debounce } from './util.js';

const selectRooms = document.querySelector('#room_number');


toInactiveForm();
getMap();

getData((data)=> {
  renderCardList(data.slice(0, 10)); // добавление меток на карту
  changeFilters(debounce(()=> {
    const filteredData = getFilter(data);
    renderCardList(filteredData.slice(0, 10));
  }, 500));
});
currentPosMarker();
formValidation(selectRooms);
showPreviewUploadPhoto();


setUserFormSubmit();

