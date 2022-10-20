const getRandomIntInclusive = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);

  return (!Number(a || b) || (a || b) < 0 || a >= b) ? NaN : Math.round(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, maxString) => string.length <= maxString;

checkStringLength(1,3);

// Набор строк для описания фотографии.
const SET_DESCRIPTION = `Каждый день сделайте своим шедевром. Джон Вуден
Лучшая месть – огромный успех. Фрэнк Синатра
Дойдя до конца, люди смеются над страхами, мучившими их вначале. Пауло Коэльо
Новое знание – отличный трамплин для прыжка к успеху. Джеймс Ален
Или вы управляете жизнью или жизнь управляет вами. Джим Рон
Только поступки что-то меняют. Если нет поступков, то все остается прежним. Лес Браун
Чтобы дойти до цели, надо идти. Оноре де Бальзак
Если ты рожден без крыльев, не мешай им расти. Коко Шанель
Если жизнь бросила вас в нокдаун, помните: у вас есть 9 секунд, чтобы встать, отдышаться и двигаться дальше.
Всегда делай то, что ты боишься сделать. Ральф Уолдо Эмерсон
Я не знаю, что является ключом к успеху, но ключ к неудаче — это желание всем угодить. Билл Косби
Одной лишь мотивации недостаточно. Если взять идиота и мотивировать его, получится мотивированный идиот. Джим Рон
Если сейчас у тебя нет ничего из того, о чём ты мечтал — пора поставить себе цели и добиваться их. Омар Хайям
Кто может, тот делает, кто не может, тот критикует. Чак Паланик `;

// Массив случайных имён.
const NAMES = [
  'Яков Русланович',
  'Елизавета Олеговна',
  'Евгения Олеговна',
  'Руслан Фаргатович',
  'Тимур',
  'Татьяна',
  'Фаргат',
  'Ольга',
  'Джексон',
  'Тыква',
];

// Сообщения для comments.
const SET_MESSAGES = `Всё отлично!
Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;

// Функция для создания массива из строк.
const getArray = (stringToArray, separator) => stringToArray.split(separator);

// Переменная - счетчик.
let countId = 0;

// Основная функция - создает объект для массива описания фото.
const createArrayDescription = () => {

  // Создаёт объект для массива коменнтариев
  const createComment = () => {
    const randomMessageIndex = getRandomIntInclusive(0, getArray(SET_MESSAGES, (/[\n]/)).length - 1);
    const randomNameIndex = getRandomIntInclusive(0, NAMES.length - 1);

    return {
      id: getRandomIntInclusive(15, 200),
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      message: getArray(SET_MESSAGES, (/[\n]/))[randomMessageIndex],
      name: NAMES[randomNameIndex],
    };
  };

  const randomDescription = getRandomIntInclusive(0, getArray(SET_DESCRIPTION, (/[\n]/)).length - 1);
  const commentsArray = Array.from({ length: [getRandomIntInclusive(1, 6)] }, createComment);

  countId += 1;
  return {
    id: countId,
    url: `photos/${countId}.jpg`,
    description: getArray(SET_DESCRIPTION, (/[\n]/))[randomDescription],
    likes: getRandomIntInclusive(15, 200),
    comments: commentsArray,
  };
};

const massiveNumbers = Array.from({ length: 25 }, createArrayDescription);

console.log(massiveNumbers);
