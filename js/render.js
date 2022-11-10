import {
  getPhotosDescription,
} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const randomUserPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesFragment = document.createDocumentFragment();


const createPictures = (picturesData) => {
  picturesData.forEach(({url, likes, comments, description}) => {
    const picture = randomUserPictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;
    picturesFragment.append(picture);
  });
  picturesContainer.append(picturesFragment);
};

createPictures(getPhotosDescription(5));
