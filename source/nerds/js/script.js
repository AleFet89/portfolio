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


//  ------------- Слайдер -------------
$(document).ready(function(){
	$('.slider__container').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		speed: 700,
		easing: 'ease',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1800,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,  
		swipe: true,		
		touchThreshold: 5,	
		touchMove: true,		
		waitForAnimate: true,
		centerMode: false,		
		variableWidth: false,
		vertical: false, 			
		verticalSwiping: false,	
		responsive:[
			{
				breakpoint: 768,
				settings: {
					adaptiveHeight: true
				}
			},
		],
		mobileFirst: false,		
	});
});

//  -------------Переключение меню при нажатии на hamburger -------------
$(document).ready(function() {
  $('.header__hamburger').click(function(evt) {
    $('.header__hamburger,.header__main-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

//  -------------Разворачивание/сворачивание футера при нажатии на стрелку -------------
$(document).ready(function() {
  $('.footer__container_arrow').click(function(evt) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

// Popups
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;


if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (evt) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			evt.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (evt) {
			popupClose(el.closest('.popup'));
			evt.preventDefault();
		});
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function (evt) {
			if (!evt.target.closest('.popup__content')) {
				popupClose(evt.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, downlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (downlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}	
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}		
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (evt) {
	if (evt.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
}
)();

(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойства
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
}
)();
