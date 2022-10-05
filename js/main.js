function getRandomIntInclusive(min, max) {
  if (min >= max) {
    return 'Данные на входе не корректны';
  } else if (!Number(min || max) || (min || max) < 0) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(7, 5);


function maxLenght(string, maxString) {
  string = string.lenght;
  if (+string > maxString) {
    return false;
  }
  return true;
}

const test = 'jhgjhgjhgjhgjhgjhgjhgjhgjhgjhgj';

console.log(maxLenght(test, 12));
