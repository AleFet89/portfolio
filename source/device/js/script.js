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

//  -------------Переключение меню при нажатии на hamburger -------------
$(document).ready(function() {
  $('.page-header__hamburger').click(function(evt) {
    $('.page-header__hamburger,.page-header__main-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

//  -------------Разворачивание/сворачивание футера при нажатии на стрелку -------------
$(document).ready(function() {
  $('.page-footer__flex-row_arrow').click(function(evt) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});


// -------------page-header__submit-search Появление кнопки при фокусе инпута поиска---------------
let headerFormSearch = document.querySelector('.page-header__form-search');
let headerInputSearch = headerFormSearch.querySelector('.page-header__input-search');
let headerSubmitSearch = headerFormSearch.querySelector('.page-header__submit-search');

headerInputSearch.onblur = inputBlur;
headerInputSearch.onfocus = inputFocus;

function inputBlur() {  
  headerSubmitSearch.style.opacity = '0';
}

function inputFocus() {
  headerSubmitSearch.style.visibility = 'visible';
  headerSubmitSearch.style.opacity = '1';
}



//--------------display delivery__tabcontent Переключение табов в доставке------------

function openTabcontent(evt, tabName) {
  let i, tabcontent, tabbuttons;
  
  tabcontent = document.getElementsByClassName('delivery__tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tabbuttons = document.getElementsByClassName('delivery__tab');
  for (let i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(' delivery__tab_active', '');
  }

  document.getElementById(tabName).style.display = 'flex';
  evt.currentTarget.className += ' delivery__tab_active';
}


//--------------Попап карты "Как проехать"--------------
let body = document.querySelector('body');
let popupMap = document.querySelector('.popup-map-body');
let popupMapOpenButton = document.querySelector('.contacts__img');
let popupMapCloseButton = popupMap.querySelector('.popup-map__close-btn');

popupMapOpenButton.addEventListener('click', function () {
  popupMap.classList.add('popup-map-body_show');
  body.classList.add('lock');
 });

popupMapCloseButton.addEventListener('click', function () {  
  popupMap.classList.remove('popup-map-body_show'); 
  body.classList.remove('lock');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupMap.classList.remove('popup-map-body_show');
    body.classList.remove('lock');
  }
});


//--------------Попап формы "Напишите нам"--------------
let popupSendForm = document.querySelector('.popup-send-message-body');
let popupSendFormOpenButton = document.querySelector('.contacts__link');
let popupSendFormCloseButton = popupSendForm.querySelector('.popup-send-message__close-btn');

popupSendFormOpenButton.addEventListener('click', function () {
  popupSendForm.classList.add('popup-send-message-body_show');
  body.classList.add('lock');
 });

popupSendFormCloseButton.addEventListener('click', function () {  
  popupSendForm.classList.remove('popup-send-message-body_show'); 
  body.classList.remove('lock');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupSendForm.classList.remove('popup-send-message-body_show');
    body.classList.remove('lock');
  }
});



// -------------Slider---------------
let slider = document.querySelector('.slider');
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = slider.querySelectorAll('.slide-item');
  let radioButtons = slider.querySelector('.slide-item__toggle');
  if (n > slides.length) {
  	slideIndex = 1;
  }
  if (n < 1) {
  	slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].className = radioButtons[i].className.replace(' slide-item__toggle_active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  radioButtons[slideIndex - 1].className += ' slide-item__toggle_active';
}






