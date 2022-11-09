import { sendData } from './api.js';
import { showAlert } from './util.js';



const priceForm = document.querySelector('#price');
const typeForm = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const addressForm = document.querySelector('#address');
const selectRooms = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');



const mapFilters = document.querySelector('.map__filters');
const mapFiltersChildren = mapFilters.children;
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');


const MIN_PRICE_OF_TYPE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

// Неактивное состояние. При открытии страница находится в неактивном состоянии


const toInactiveForm = function () {
  mapFilters.classList.add('ad-form--disabled');
  for (let element of mapFiltersChildren) {
    element.setAttribute('disabled', 'disabled');
  }

  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};
const toActiveForm = function () {
  mapFilters.classList.remove('ad-form--disabled');
  for (let element of mapFiltersChildren) {
    element.removeAttribute('disabled');
  }

  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  });
};



//  выбор опции меняет атрибуты минимального значения и плейсхолдера поля «Цена за ночь»;

const onPriceOfType = function ( ) {
  priceForm.value = '';
  priceForm.placeholder = MIN_PRICE_OF_TYPE[typeForm.value];
  priceForm.min = MIN_PRICE_OF_TYPE[typeForm.value];
};
typeForm.addEventListener('change', onPriceOfType);

// выбор опции одного поля автоматически изменят значение другого.

const onTimeIn = function ( ) {
  timeOut.value = timeIn.value;
};
const onTimeOut = function ( ) {
  timeIn.value = timeOut.value;
};
timeIn.addEventListener('change', onTimeIn);
timeOut.addEventListener('change', onTimeOut);

// запись текущих координат в офрму
const getCurrentPosition = function (coordinates) {
  addressForm.setAttribute('readonly', 'readonly');
  addressForm.value = `${(coordinates.lat).toFixed(5)},  ${(coordinates.lng).toFixed(5)}`;
};



// валидация формы

// кол-во комнат кол-во гостей

const formValidation = function () {
  if (selectRooms.value < capacity.value) {
    capacity.setCustomValidity(`В ${selectRooms.value} комнате возможно разместить только ${selectRooms.value} гостя`);
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();


  capacity.addEventListener('change', (evt) => {
    if (evt.currentTarget.value > selectRooms.value) {
      capacity.style.borderColor = 'red';
      capacity.setCustomValidity(`В ${selectRooms.value} комнате возможно разместить до  ${selectRooms.value} гостей`);
    } else if (capacity.value == '0') {
      capacity.style.borderColor = 'red';
      capacity.setCustomValidity('Не для гостей');
    } else {
      capacity.setCustomValidity('');
    }
    capacity.reportValidity();
  });

  selectRooms.addEventListener('change', (evt) => {
    if ((evt.currentTarget.value < capacity.value) && (selectRooms.value !== '100')) {
      capacity.style.borderColor = 'red';
      capacity.setCustomValidity(`В ${evt.currentTarget.value} комнате возможно разместить до ${evt.currentTarget.value} гостей`);
    } else if (selectRooms.value === '100') {
      capacity.style.borderColor = 'red';
      capacity.setCustomValidity('Не для гостей');
    } else {
      capacity.setCustomValidity('');
    }
    capacity.reportValidity();
  });

};


const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};




export { onPriceOfType, onTimeIn,  onTimeOut, toInactiveForm, toActiveForm, getCurrentPosition, formValidation, setUserFormSubmit };

