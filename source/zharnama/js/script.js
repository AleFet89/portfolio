/*  -------------Кроссбраузерность IE 9< -------------*/
let html5Tags = ['section', 'article', 'main', 'aside', 
                 'header', 'footer', 'nav', 'figure', 
                 'figcaption', 'address', 'canvas', 
                 'details', 'summary', 'audio', 'video',
                 'source', 'datalist', 'meter', 'progress',
                 'output', 'time', 'mark'];
for (let i = 0; i < html5Tags.length; i++) {
    document.createElement(html5Tags[i]);
}

/*-------------Адаптивное меню гамбургер -------------*/
const menuHamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__nav-content');

const toggleMenu = () => {
	menu.classList.toggle('_active');
	menuHamburger.classList.toggle('_active');
};
 
menuHamburger.addEventListener('click', evt => {
	evt.stopPropagation();
	toggleMenu();
});

document.addEventListener('click', evt => {
	let target = evt.target;
	let its_menu = target == menu || menu.contains(target);
	let its_menuHamburger = target == menuHamburger;
	let menu_is_active = menu.classList.contains('_active');
	
	if (!its_menu && !its_menuHamburger && menu_is_active) {
		toggleMenu();
	}
});

/*  -------------Разворачивание/сворачивание footer при нажатии на стрелку -------------*/
const footerArrow = document.querySelector('.footer__arrow');
const footerColumn = document.querySelector('.footer__column');

footerArrow.addEventListener('click', () => {
	footerArrow.classList.toggle('_active');
	footerColumn.classList.toggle('_active');
});

/*  -------------Появление scroll-up при прокрутке страницы и перемотка наверх -------------*/
const arrowUp = document.querySelector('.scrollup');

window.onscroll = () => {
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop > 850) {
		arrowUp.classList.add('_onscroll');		
	} else if (scrollTop < 850) {
		arrowUp.classList.remove('_onscroll');
	}
};

arrowUp.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

/*------------------------Попапы и lock-padding------------------*/
let popupLinks = document.querySelectorAll('._popup-link');
const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const lockPadding = document.querySelectorAll('._lock-padding');
let unlock = true;
const timeout = 600;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		const popupName = popupLink.getAttribute('href').replace('#', '');
		const currentPopup = document.getElementById(popupName);
		
		popupLink.addEventListener('click', function (evt) {
			popupOpen(currentPopup);
			evt.preventDefault();
		});
		popupLink.addEventListener('keydown', (evt) => {
			if (evt.keyCode === 27) {
				currentPopup.classList.remove('_open');
				bodyUnLock();
			}					
		});
	}
}

const popupCloseIcon = document.querySelectorAll('._close-popup');
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
		const popupActive = document.querySelector('.popup._open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('_open');
		currentPopup.addEventListener('click', (evt) => {
			if (!evt.target.closest('.popup__content')) {
				popupClose(evt.target.closest('.popup'));
			}
		});		
	}
}

function popupClose(popupActive, downlock = true) {
	if (unlock) {
		popupActive.classList.remove('_open');
		if (downlock) {
			bodyUnLock();
		}
	}	
}

function bodyLock() {
	let lockPaddingValue = window.innerWidth - wrapper.offsetWidth + 'px';	

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}	
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

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
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

/*------------------------Отправка формы------------------*/
document.addEventListener('DOMContentLoaded', function () {
	const popup = document.getElementById('orderConsultation');
	const popupSuccess = document.querySelector(".popup_success");
	const form = document.getElementById('form');	
	form.addEventListener('submit', formSend);

	async function formSend(evt) {
		evt.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.closest('.popup__content').classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.closest('.popup__content').classList.remove('_sending');
				form.reset();
				popup.classList.remove('_open');
				popupSuccess.classList.add('_open');	
				popupSuccess.addEventListener('click', (evt) => {
					if (!evt.target.closest('.popup__content')) {
						popupSuccess.classList.remove('_open');
						body.style.paddingRight = '0px';
						body.classList.remove('_lock');
						if (lockPadding.length > 0) {
							for (let index = 0; index < lockPadding.length; index++) {
								const el = lockPadding[index];
								el.style.paddingRight = '0px';
							}
						}
					}
				});	
			} else {
				alert('Ошибка');
				form.closest('.popup__content').remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}			
		}
		return error;

		function formAddError(input) {
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
	}
});

/* -------------полифил для попап-окон -------------- */
// подгоняют определенные параметры под старые браузеры в частности IE11
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