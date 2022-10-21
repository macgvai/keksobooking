const priceForm = document.querySelector('#price');
const typeForm = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const MIN_PRICE_OF_TYPE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
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

export { onPriceOfType, onTimeIn,  onTimeOut };
