var elsOpenModalButton = document.querySelector('.links__right');
var elCloseModalButton = document.querySelector('.form__btn');
var elModal = document.querySelector('.js-model');

elsOpenModalButton.addEventListener('click', function(){
  elModal.classList.add('open-modal')
});

elCloseModalButton.addEventListener('click', function(){
elModal.classList.remove('open-modal')
})