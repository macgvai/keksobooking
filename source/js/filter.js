import { clearMarker } from "./map.js";

const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const filterFeatures = mapFilters.querySelectorAll('.map__checkbox');

const priceFilterData = {
  low: {
    start: 0,
    end: 10000,
  },
  middle: {
    start: 10000,
    end: 50000,
  },
  high: {
    start: 50000,
    end: 1000000,
  },
};

const checkType = (element) => typeFilter.value === element.offer.type || typeFilter.value === 'any';

const checkPrice = (element) => priceFilter.value === 'any' || (element.offer.price >= priceFilterData[priceFilter.value].start && element.offer.price <= priceFilterData[priceFilter.value].end);

const checkRooms = (element) => +roomsFilter.value === element.offer.rooms || roomsFilter.value === 'any';

const checkGuests = (element) => +guestsFilter.value === element.offer.guests || guestsFilter.value === 'any';

const checkFeatures = (element) => Array.from(filterFeatures)
  .every((filterFeatures) => {
    if (!filterFeatures.checked) {
      return true;
    }
    if (!element.offer.features) {
      return false;
    }
    return element.offer.features.includes(filterFeatures.value);
  });


const getFilter = function (servData) {
  const filteredData = [];
  for (let element of servData) {
    if (
      checkType(element) &&
      checkPrice(element) &&
      checkRooms(element) &&
      checkGuests(element) &&
      checkFeatures(element)
    ) {
      filteredData.push(element);
    }
  }
  return filteredData;
};

// Перерисовка карты

const changeFilters = (cb) => {
  mapFilters.addEventListener('change', () => {
    clearMarker(),
    cb();
  });
};

export { getFilter, changeFilters };
