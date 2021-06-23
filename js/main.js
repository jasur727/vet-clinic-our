var elsOpenModalButton = document.querySelectorAll('.links__right');
var elCloseModalButton = document.querySelector('.form__btn');
var elModal = document.querySelector('.js-model');

elOpenModalButton.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    elModal.classList.add('model-open');
  });
});

elCloseModalButton.addEventListener('click', function () {
  elModal.classList.remove('model-open');
});

