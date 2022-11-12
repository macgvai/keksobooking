import { toActiveForm, getCurrentPosition } from './form.js';
import { renderCard } from './card.js';
import { getData } from './api.js';

const L = window.L;
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

// добавление меток на карту

const renderCardList = function (offersArr) {
  offersArr.forEach((element) => {

    const marker = L.marker(
      element.location,
      {
        icon: MarkerIcon,
      },
    );

    marker.addTo(map).bindPopup(renderCard(element));
  });
};

const getMap = () => {
  map.on('load', () => {
    toActiveForm(); // При успешной загрузке карты форма "Ваше объявление" переключается в активное состояние
    getCurrentPosition(TOKYO);
    getData(renderCardList); // добавление меток на карту
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
