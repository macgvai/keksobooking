const TYPES_OF_HOUSING = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const templateCard = document.querySelector('#card').content.querySelector('.popup');


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

// создание Features
const createFeatures = (features) => {
  const featuresFragment = document.createDocumentFragment();
  features.forEach((element) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature', `popup__feature--${element}`);
    featuresFragment.appendChild(feature);
  });
  return featuresFragment;
};

const renderCard = function ({author, offer}) {
  const newCard = templateCard.cloneNode(true);

  newCard.querySelector('.popup__title').textContent = offer.title || '';
  newCard.querySelector('.popup__text--address').textContent = offer.address || '';
  newCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь` || '';
  newCard.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[offer.type] || '';
  newCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей` || '';
  newCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` || '';
  newCard.querySelector('.popup__features').textContent = offer.features || '';
  newCard.querySelector('.popup__description').textContent = offer.description || '';
  newCard.querySelector('.popup__avatar').src = author.avatar || 'img/avatars/default.png';

  const cardFeatures = newCard.querySelector('.popup__features');
  cardFeatures.innerHTML = '';
  if (offer.features) {
    const newFeatureElements = createFeatures(offer.features);
    cardFeatures.appendChild(newFeatureElements);
  } else {
    cardFeatures.remove();
  }


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



export { renderCard, TYPES_OF_HOUSING };





