import {
  // renderPhotos,
  picturesContainer,
} from './render.js';
import {
  isEscapeKey,
} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('img');

const allThumbnails = document.querySelectorAll('.picture');

const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommentsCount = document.querySelector('.comments-count');
const bigPictureDescription = document.querySelector('.social__caption');

const commentsCount = document.querySelector('.social__comment-count');
const newCommentsLoader = document.querySelector('.comments-loader');

const body = document.querySelector('body');


// export const addThumbnailClickHandler = (thumbnail, photo) => {
//   thumbnail.addEventListener('click', () => {
//     bigPicture.src = photo.url;
//     bigPictureLikes.textContent = photo.likes;
//     bigPictureCommentsCount.textContent = photo.comments.length;
//     bigPictureDescription.textContent = photo.description;

//     // updateComments(photo.comments);

//     bigPictureContainer.classList.remove('hidden');
//     commentsCount.classList.add('hidden');
//     newCommentsLoader.classList.add('hidden');
//     body.classList.add('modal-open');
//   });
// };

const openModal = () => {
  bigPictureContainer.classList.remove('hidden');

  // document.addEventListener('keydown', (evt) => {
  //   if (isEscapeKey(evt)) {
  //     evt.preventDefault();
  //     bigPictureContainer.classList.add('hidden');
  //   }
  // });
};


picturesContainer.onClick = (evt) => {
  if (evt.target.nodeName === 'img') {
    bigPictureContainer.classList.remove('hidden');
  }
};

// for (let i = 0; i < allThumbnails.length; i++) {

//   addThumbnailClickHandler(allThumbnails[i], renderPhotos[i]);
// }
