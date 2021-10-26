import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArray} from './utils.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIME = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createObject = () => {
  const object = {
    author: {
      avatar: '',
    },
    offer: {
      title: 'New Object',
      address: '',
      price: getRandomPositiveInteger(0, 10000),
      type: TYPES[getRandomPositiveInteger(0, TYPES.length - 1)],
      rooms: getRandomPositiveInteger(1, 20),
      guests: getRandomPositiveInteger(1, 100),
      checkin: TIME[getRandomPositiveInteger(0, TIME.length - 1)],
      checkout: TIME[getRandomPositiveInteger(0, TIME.length - 1)],
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

export {createObject};
