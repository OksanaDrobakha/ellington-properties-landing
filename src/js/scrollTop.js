const buttonRef = document.querySelector('.js-scroll-top');

window.addEventListener('scroll', e => {
  if (window.pageYOffset > 720) {
    buttonRef.classList.add('visible');
  } else {
    buttonRef.classList.remove('visible');
  }
});

buttonRef.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
