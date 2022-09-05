'use strict'
const OFFER_COUNT = 10;
const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const arrFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

let offers = [];

// случайное положительное  число
const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// случайное число с палвающей запятой
const getRandomFloatingPointNumber = (min, max, decimalPlaces) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return (min + Math.random() * (max - min)).toFixed(decimalPlaces);
};

// получаем случый аватар
const getAvatar = (min, max) => {
  const getRandomAvatar = '0' + getRandomInteger(min, max);
  const avatar = 'img/avatars/user' + getRandomAvatar + '.png';

  return avatar;
};

// местоположение в виде географических координат
const getLocation = (decimalPlaces) => {
  const currentLocationX = getRandomFloatingPointNumber(35.65000, 35.70000, decimalPlaces);
  const currentLocationY = getRandomFloatingPointNumber(139.70000, 139.80000, decimalPlaces);
  const currentLocation = {
    x: currentLocationX,
    y: currentLocationY,
  };
  return currentLocation;
};

const currLocation = getLocation(5);
const currentAdress =  Object.entries(currLocation).map(([key, value]) => key + ' ' + value).join(', ');

// массив случайной длины из значений без повторений
const getRandomArr = (arr) => {
  function makeRandomArr() {
    return Math.random() - 0.5;
  }

  let mixFeatures = arr.sort(makeRandomArr).slice(0, getRandomInteger(1, arr.length));
  return mixFeatures;
};

// получаем информацию об объявлении
const getOffer = () => {
  for (let i = 0; i < OFFER_COUNT; i++) {
    offers.push({
      author: getAvatar(1, 10),
      offer: {
        title: 'Ваше объявление',
        address: currentAdress,
        price: getRandomInteger(1, 100000),
        type: TYPE[0],
        rooms: getRandomInteger(1, 10),
        guests: getRandomInteger(1, 10),
        checkin: checkin[1],
        checkout: checkout[0],
        features: getRandomArr(arrFeatures),
        description: 'отличная квартира!',
        photos: getRandomArr(photosArr),
      },
      location: currLocation})
  }
};

getOffer();
