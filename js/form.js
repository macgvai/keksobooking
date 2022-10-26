const priceForm = document.querySelector('#price');
const typeForm = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const addressForm = document.querySelector('#address');

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


export { onPriceOfType, onTimeIn,  onTimeOut, toInactiveForm, toActiveForm, getCurrentPosition };

