import {
  isEscapeKey,
} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');

const commentsCount = document.querySelector('.social__comment-count');
const newCommentsLoader = document.querySelector('.comments-loader');

const body = document.querySelector('body');


export const createBigPicture = (photo) => {
  bigPictureContainer.querySelector('.big-picture__img img').src = photo.url;
  bigPictureContainer.querySelector('.big-picture__img img').alt = photo.description;
  bigPictureContainer.querySelector('.social__caption').textContent = photo.description;
  bigPictureContainer.querySelector('.likes-count').textContent = photo.likes;

  bigPictureContainer.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  newCommentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
};

export const openModal = (picture) => {
  bigPictureContainer.classList.remove('hidden');
  createBigPicture(picture);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPictureContainer.classList.add('hidden');
    }
  });
};

// picturesContainer.addEventListener('click', (evt) => {
//   if(evt.target.nodeName === 'IMG') {
//     openModal();
//     const element = evt.target;
//   }
// });
