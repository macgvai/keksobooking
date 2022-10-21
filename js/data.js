import { getRandomInteger, getRandomFloatingPointNumber, getRandomArr } from './util.js';

const OFFER_COUNT = 10;
const TYPE_HOUSE = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};
const arrFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

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


// получаем информацию об объявлении
const getOffer = () => {
  let offers = [];
  for (let i = 0; i < OFFER_COUNT; i++) {
    offers.push({
      author: getAvatar(1, 8),
      offer: {
        title: 'Ваше объявление',
        address: currentAdress,
        price: getRandomInteger(1, 100000),
        type: TYPE_HOUSE[Object.keys(TYPE_HOUSE)[getRandomInteger(0, Object.keys(TYPE_HOUSE).length)]],
        rooms: getRandomInteger(1, 10),
        guests: getRandomInteger(1, 10),
        checkin: checkin[getRandomInteger(0, checkin.length - 1)],
        checkout: checkout[getRandomInteger(0, checkout.length - 1)],
        features: getRandomArr(arrFeatures),
        description: 'отличная квартира!',
        photos: photosArr,
      },
      location: currLocation});
  }
  return offers;
};

export {getOffer};




