const imagesRefs = document.querySelectorAll('.js-modal-images');
const modalRef = document.querySelector('.js-modal');

const getModalContent = ({ src, alt }) =>
  `<img class="modal-image" src="${src}" alt="${alt}">`;

const onOverlayClick = e => {
  if (e.target === e.currentTarget) {
    modalRef.classList.remove('modal');
    modalRef.innerHTML = '';
    document.body.style.overflow = 'visible';
    modalRef.removeEventListener('click', onOverlayClick);
  }
};

const onImageClick = imagesRefs.forEach(ref =>
  ref.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    modalRef.innerHTML = getModalContent({
      src: ref.src,
      alt: 'some alt',
    });
    modalRef.classList.add('modal');

    modalRef.addEventListener('click', e => {
      // if (e.target === e.currentTarget) {
      modalRef.classList.remove('modal');
      modalRef.innerHTML = '';
      document.body.style.overflow = 'visible';
      modalRef.removeEventListener('click', onOverlayClick);
      // }
    });
  })
);
