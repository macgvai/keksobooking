// import  {TYPES_OF_HOUSING} from './card.js';

// console.log(filterOptions);



const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');

const filterDishwasher = mapFilters.querySelector('#filter-dishwasher');
const filterWifi = mapFilters.querySelector('#filter-wifi');
const filterParking = mapFilters.querySelector('#filter-parking');
const filterWasher = mapFilters.querySelector('#filter-washer');
const filterElevator = mapFilters.querySelector('#filter-elevator');
const filterConditioner = mapFilters.querySelector('#filter-conditioner');

typeFilter.addEventListener('change', () => {console.log(typeFilter.value);});
priceFilter.addEventListener('change', () => {console.log(priceFilter.value);});
roomsFilter.addEventListener('change', ()=>{console.log(roomsFilter.value);});
guestsFilter.addEventListener('change', ()=>{console.log(guestsFilter.value);});
filterDishwasher.addEventListener('change', ()=>{console.log(filterDishwasher.value);});
filterWifi.addEventListener('change', ()=>{console.log(filterWifi.value);});
filterParking.addEventListener('change', ()=>{console.log(filterParking.value);});
filterWasher.addEventListener('change', ()=>{console.log(filterWasher.value);});
filterElevator.addEventListener('change', ()=>{console.log(filterElevator.value);});
filterConditioner.addEventListener('change', ()=>{console.log(filterConditioner.value);});

// обьект с параметрами фильтра

const filterValues = {
  type: typeFilter.value,
  price: priceFilter.value,
  rooms: roomsFilter.value,
  guests: guestsFilter.value,
};


// обработчик и перезапись текущих парметров фильтра

const currTarget = function (targ, name) {
  targ.addEventListener('change', (evt) => {
    filterValues[name] = evt.target.value;
  });
};

currTarget(typeFilter, 'type');
currTarget(priceFilter, 'price');
currTarget(roomsFilter, 'rooms');
currTarget(guestsFilter, 'guests');






// console.log(filterValues);

const getFilter = function (servData) {
  const filterData = filterValues;
  console.log(filterData.type);
  const getSortData = servData.filter((element) => {
    return element.offer.type === filterData.type;
  });
  console.log(getSortData);
  return getSortData;
};

export { getFilter };
