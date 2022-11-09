const ALERT_SHOW_TIME = 3000;

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

// сообщение об ошибке

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export { getRandomInteger, getRandomFloatingPointNumber, getRandomArr, showAlert };
