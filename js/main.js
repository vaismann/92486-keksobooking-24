const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIME = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const OBJECT_QNTY = 10;

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

// eslint-disable-next-line id-length
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line id-length
function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandomArray = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0],
);

const createObject = () => {
  const object = {
    author: {
      avatar: '',
    },
    offer: {
      title: 'New Object',
      address: '',
      price: getRandomPositiveInteger(0, 10000),
      type: getRandomPositiveInteger(0, TYPES.length - 1),
      rooms: getRandomPositiveInteger(1, 20),
      guests: getRandomPositiveInteger(1, 100),
      checkin: getRandomPositiveInteger(0, TIME.length - 1),
      checkout:getRandomPositiveInteger(0, TIME.length - 1),
      features: getRandomArray(FEATURES, FEATURES.length - 1),
      description: 'Some text',
      photos: getRandomArray(PHOTOS, PHOTOS.length - 1),
    },
    location: {
      lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
      lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
    },
  };
  const avatarNumber = getRandomPositiveInteger(1, 10);
  object.author.avatar = `img/avatars/user${  avatarNumber > 9 ? avatarNumber : `0${ avatarNumber}` }.png`;
  object.offer.address = `${object.location.lat  },${  object.location.lng}`;
  return object;
};

const similarObjects = Array.from({length: OBJECT_QNTY}, createObject);

similarObjects;
