import { getOffer } from './data.js';

const templateCard = document.querySelector('#card').content.querySelector('.popup');
const checkCard = document.querySelector('.map__canvas');
const cardsArr = getOffer();


// создаём фото из масива
const createPhotos = (photos) => {
  const photosFragment = document.createDocumentFragment();

  for (let i = 0; i < photos.length; i++) {
    const newPhoto = document.createElement('img');
    newPhoto.src = photos[i];
    newPhoto.classList.add('popup__photo');
    newPhoto.alt = 'Фотография жилья';
    newPhoto.setAttribute('width', '45');
    newPhoto.setAttribute('height', '40');
    photosFragment.appendChild(newPhoto);
  }

  return photosFragment;
};

const renderCard = function (author, offer) {
  const newCard = templateCard.cloneNode(true);

  newCard.querySelector('.popup__title').textContent = offer.title || '';
  newCard.querySelector('.popup__text--address').textContent = offer.address || '';
  newCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь` || '';
  newCard.querySelector('.popup__type').textContent = offer.type || '';
  newCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей` || '';
  newCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` || '';
  newCard.querySelector('.popup__features').textContent = offer.features || '';
  newCard.querySelector('.popup__description').textContent = offer.description || '';
  newCard.querySelector('.popup__avatar').src = author.avatar || 'img/avatars/default.png';

  const cardPhotos = newCard.querySelector('.popup__photos');
  cardPhotos.innerHTML = '';
  if (offer.photos) {
    const newPhotoElements = createPhotos(offer.photos);
    cardPhotos.appendChild(newPhotoElements);
  } else {
    cardPhotos.remove();
  }

  return newCard;
};

export { renderCard, cardsArr, checkCard };





