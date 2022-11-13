import {
  getPhotosDescription,
} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesFragment = document.createDocumentFragment();


const createPicture = (picture) => {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = picture.url;
  element.querySelector('.picture__img').alt = picture.description;
  element.querySelector('.picture__comments').textContent = picture.comments;
  element.querySelector('.picture__likes').textContent = picture.likes;

  picturesFragment.append(element);
};

const renderPhotos = (pictures) => {
  pictures.forEach((picture) => {
    createPicture(picture);
  });

  picturesContainer.append(picturesFragment);
};

renderPhotos(getPhotosDescription(25));
