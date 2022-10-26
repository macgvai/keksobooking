import { toActiveForm, getCurrentPosition } from './form.js';

const TOKYO = {
  lat: 35.7021,
  lng: 139.4252,
};
const ZOOM_MAP = 12;

const map = L.map('map-canvas');

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



const getMap = () => {
  map.on('load', () => {
    toActiveForm() // При успешной загрузке карты форма "Ваше объявление" переключается в активное состояние
    getCurrentPosition(TOKYO)
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
currentPosMarker();


export { getMap };
