import { toActiveForm, getCurrentPosition } from './form.js';
import { renderCard, cardsArr } from './card.js';

const TOKYO = {
  lat: 35.67487,
  lng:   139.75039,
};
const ZOOM_MAP = 13;




const map = L.map('map-canvas');

//  маркер
const MarkerIcon = L.icon({
  iconUrl: './leaflet/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// главный маркер
const mainMarkerIcon = L.icon({
  iconUrl: './leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  TOKYO,
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

// // создаем балун

// const createCustomPopup = (point) => {
//   const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
//   const popupElement = balloonTemplate.cloneNode(true);

//   popupElement.querySelector('.balloon__title').textContent = point.title;
//   popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

//   return popupElement;
// };



const getMap = () => {
  map.on('load', () => {
    toActiveForm(); // При успешной загрузке карты форма "Ваше объявление" переключается в активное состояние
    getCurrentPosition(TOKYO);

    fetch('https://23.javascript.pages.academy/keksobooking/data')  //  добавит на карту метки объявлений, «обычные».
      .then((response) => response.json())
      .then((json) => {
        json.forEach((element) => {
          console.log(element)
          const lat = element.location.lat;
          const lng = element.location.lng;

          const marker = L.marker(
            {
              lat,
              lng,
            },
            {
              icon: MarkerIcon,
            },
          );

          marker.addTo(map).bindPopup(renderCard(element.author, element.offer));
        });
      });

  });
  map.setView(TOKYO,  ZOOM_MAP);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' })
    .addTo(map);


  mainMarker.addTo(map);

};

// выбор адреса путём перемещения главной метки.

const currentPosMarker = function () {
  mainMarker.on('moveend', (evt) => {
    const currentPos = evt.target.getLatLng();
    getCurrentPosition(currentPos);
  });
};




export { getMap, currentPosMarker };
