const getRandomIntInclusive = (a, b) => {
  if (!Number(a || b) || (a || b) < 0 || a >= b) {
    return NaN;
  }

  const min = Math.ceil(a);
  const max = Math.floor(b);

  return Math.round(Math.random() * (max - min + 1)) + min;

  // вариант с тернарным оператором.
  // return (!Number(a || b) || (a || b) < 0 || a >= b) ? NaN : Math.round(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(7, 5);

const checkStringLength = (string, maxString) => string.length <= maxString;

checkStringLength('строка', 12);
