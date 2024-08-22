'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//select all the DOM elemnts with the class name show-modal
const showModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    openCloseModal(1);
  });
}

btnCloseModal.addEventListener('click', function () {
  openCloseModal(0);
});

overlay.addEventListener('click', function () {
  openCloseModal(0);
});

const openCloseModal = function (openClose) {
  if (openClose === 1) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else if (openClose === 0) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    openCloseModal(0);
  }
});
