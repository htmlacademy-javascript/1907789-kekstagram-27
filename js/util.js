const getRandomIntInclusive = (a, b) => {
  if (!Number(a || b) || (a || b) < 0 || a >= b) {
    return NaN;
  }

  const min = Math.ceil(a);
  const max = Math.floor(b);

  return Math.round(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, maxString) => string.length <= maxString;

checkStringLength(1,2);

const getRandomElement = (element) => element[getRandomIntInclusive(0, element.length - 1)];

export {
  getRandomIntInclusive,
  getRandomElement,
};
