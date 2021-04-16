//  -------------Кроссбраузерность IE 9< -------------
let html5Tags = ['section', 'article', 'main', 'aside', 
                 'header', 'footer', 'nav', 'figure', 
                 'figcaption', 'address', 'canvas', 
                 'details', 'summary', 'audio', 'video',
                 'source', 'datalist', 'meter', 'progress',
                 'output', 'time', 'mark'];
for (let i = 0; i < html5Tags.length; i++) {
    document.createElement(html5Tags[i]);
}

//  ------------- Попап входа в личный кабинет   -------------
let popupFormWrapper = document.querySelector('.fixed-overlay-form');
let popupForm = document.querySelector('.modal-authorization-form');
let formOpenPopupButton = document.querySelector('.modal-form-open-btn');
let formClosePopupButton = popupForm.querySelector('.modal-form-close-btn');

formOpenPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupFormWrapper.classList.add('modal-form-show');
  popupForm.classList.add('modal-form-show');
 });

formClosePopupButton.addEventListener('click', function () {  
  popupFormWrapper.classList.remove('modal-form-show');
  popupForm.classList.remove('modal-form-show'); 
});

document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
	 popupFormWrapper.classList.remove('modal-form-show');
    popupForm.classList.remove('modal-form-show');
  }
});

//  ------------- Попап карты "Как проехать"   -------------
let popupMapWrapper = document.querySelector('.fixed-overlay-map');
let popupMap = document.querySelector('.modal-map');
let mapOpenPopupButtons = document.querySelectorAll('.modal-map-open-btn');
let mapClosePopupButton = popupMap.querySelector('.modal-map-close-btn');

mapOpenPopupButtons[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMapWrapper.classList.add('modal-map-show');
  popupMap.classList.add('modal-map-show');
 });

mapOpenPopupButtons[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMapWrapper.classList.add('modal-map-show');
  popupMap.classList.add('modal-map-show');
 });

mapClosePopupButton.addEventListener('click', function () {  
  popupMapWrapper.classList.remove('modal-map-show');
  popupMap.classList.remove('modal-map-show'); 
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
	  popupMapWrapper.classList.remove('modal-map-show');
    popupMap.classList.remove('modal-map-show');
  }
});