import {
  isEscapeKey,
} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#social__comment')
  .content
  .querySelector('.social__comment');


const commentsCount = document.querySelector('.social__comment-count');
const newCommentsLoader = document.querySelector('.comments-loader');

const body = document.querySelector('body');

// const createComment = (data) => {
//   const element = commentTemplate.cloneNode(true);

//   commentsContainer.querySelector('img').src = data.avatar;
//   commentsContainer.querySelector('img').alt = data.name;
//   commentsContainer.querySelector('social__text').textContent = data.message;

//   return element;
// };

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
  const commentFragment = document.createDocumentFragment();
  const socialComments = bigPictureContainer.querySelector('.social__comments');
  socialComments.innerHTML = '';
  const comments = picture.comments

  comments.forEach((data) => {
    const element = commentTemplate.cloneNode(true);
    element.querySelector('.social__picture').src = data.avatar;
    element.querySelector('.social__text').textContent = data.message;
    element.querySelector('.social__picture').alt = data.name;
    commentFragment.append(element);
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPictureContainer.classList.add('hidden');
    }
  });
};


// export const renderPhotos = (pictures) => {
//   const picturesFragment = document.createDocumentFragment();

//   pictures.forEach((picture) => {
//     const pictureElement = createPicture(picture);
//     picturesFragment.append(pictureElement);
//   });


// picturesContainer.addEventListener('click', (evt) => {
//   if(evt.target.nodeName === 'IMG') {
//     openModal();
//     const element = evt.target;
//   }
// });
