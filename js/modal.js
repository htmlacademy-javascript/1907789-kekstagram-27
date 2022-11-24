import {
  isEscapeKey,
} from './util.js';
import {
  getPhotosDescription,
  SIMILAR_DESCRIPTION_COUNT,
} from './data.js';
const bigPictureContainer = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#social__comment')
  .content
  .querySelector('.social__comment');


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

const createCommentElement = (obj) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = obj.avatar;
  comment.querySelector('.social__text').textContent = obj.message;
  comment.querySelector('.social__picture').alt = obj.name;
  return comment;
};

const updateComment = (comments) => {
  const commentFragment = document.createDocumentFragment();
  const socialComments = bigPictureContainer.querySelector('.social__comments');
  socialComments.innerHTML = '';

  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentFragment.append(commentElement);
  });
  return socialComments.append(commentFragment);

};
const g = getPhotosDescription(SIMILAR_DESCRIPTION_COUNT);
const r = g.comments;
export const openModal = (picture) => {
  bigPictureContainer.classList.remove('hidden');
  createBigPicture(picture);
  updateComment(r);

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
