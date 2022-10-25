const map = L.map('map-canvas')
  .setView({
    lat: 55.894477,
    lng: 37.451484,
  },  12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' })
  .addTo(map);

export { map };
