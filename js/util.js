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

// массив случайной длины из значений без повторений
const getRandomArr = (arr) => {
  function makeRandomArr() {
    return Math.random() - 0.5;
  }

  let mixFeatures = arr.sort(makeRandomArr).slice(0, getRandomInteger(1, arr.length));
  return mixFeatures;
};

export { getRandomInteger, getRandomFloatingPointNumber, getRandomArr };
