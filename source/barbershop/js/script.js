//  -------------Кроссбраузерность IE 9< -------------
var html5Tags = ['section', 'article', 'main', 'aside', 
                 'header', 'footer', 'nav', 'figure', 
                 'figcaption', 'address', 'canvas', 
                 'details', 'summary', 'audio', 'video',
                 'source', 'datalist', 'meter', 'progress',
                 'output', 'time', 'mark'];
for (var i = 0; i < html5Tags.length; i++) {
    document.createElement(html5Tags[i]);
}

//  ------------- Попап входа в личный кабинет   -------------
var popupFormWrapper = document.querySelector('.fixed-overlay-form');
var popupForm = document.querySelector('.modal-authorization-form');
var formOpenPopupButton = document.querySelector('.modal-form-open-btn');
var formClosePopupButton = popupForm.querySelector('.modal-form-close-btn');

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
    popupForm.classList.remove('modal-form-show');
  }
});

//  ------------- Попап карты "Как проехать"   -------------
var popupMapWrapper = document.querySelector('.fixed-overlay-map');
var popupMap = document.querySelector('.modal-map');
var mapOpenPopupButtons = document.querySelectorAll('.modal-map-open-btn');
var mapClosePopupButton = popupMap.querySelector('.modal-map-close-btn');

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
    popupMap.classList.remove('modal-map-show');
  }
});