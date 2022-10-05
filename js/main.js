function getRandomIntInclusive(a, b) {
  if (a >= b) {
    return 'Данные на входе не корректны';
  } else if (!Number(a || b) || (a || b) < 0) {
    return NaN;
  }
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.round(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(7, 5);


function checkStringLenght(string, maxString) {
  return string.lenght <= maxString;
}

checkStringLenght('test', 12);
