import {
  getPhotosDescription,
  SIMILAR_DESCRIPTION_COUNT,
} from './data.js';

export const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = (picture) => {
  const element = pictureTemplate.cloneNode(true);

  element.querySelector('.picture__img').src = picture.url;
  element.querySelector('.picture__img').alt = picture.description;
  element.querySelector('.picture__comments').textContent = picture.comments;
  element.querySelector('.picture__likes').textContent = picture.likes;

  return element;
};

export const renderPhotos = (pictures) => {
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    picturesFragment.append(pictureElement);
  });

  return picturesContainer.append(picturesFragment);
};

renderPhotos(getPhotosDescription(SIMILAR_DESCRIPTION_COUNT));
