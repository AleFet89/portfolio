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

/* ------------------------Select на choices.js------------------*/
const multiDefault = () => {
	const elements = document.querySelectorAll('.select__list_multi-default');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			noResultsText: 'Ничего не найдено',
			placeholder: false,
			position: 'bottom',
			shouldSort: false,
			removeItemButton: true,
			paste: false,
			searchChoices: true,
			noChoicesText: 'Больше ничего не найдено',
		});

		const ariaLabelSelect = el.getAttribute('aria-label');
		el.closest('.choices').setAttribute('aria-label', ariaLabelSelect);	

		let selectsMultiple = document.querySelectorAll('.choices[data-type*=select-multiple]');
		
		for (const select of selectsMultiple) {
			function hidePlaceholder() {
				let optionSelect = el.querySelector('option');
				let inputCloned = select.querySelector('.choices__input--cloned');
				if (el.contains(optionSelect)) {
					inputCloned.classList.add('visually-hidden');
				} else if (!el.contains(optionSelect)) {
					inputCloned.classList.remove('visually-hidden');
				}
			}

			select.addEventListener('change', evt => {
				if (evt.defaultPrevented) {
					return;
				}
				evt.preventDefault();
				
				hidePlaceholder();
			});			
		}		
	});	
};

multiDefault();

 /*-------------Фиксированный header при скролле -------------*/
window.onscroll = () => {
	let headerTopMenu = document.querySelector('.header__top-menu');
	let headerLogoLink = document.querySelector('.header__logo-link');
	let headerMainMenu = document.querySelector('.header__main-menu');
	let headerNavLinks = document.querySelectorAll('.header__nav-link');
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	if (scrollTop > 50) {
		headerTopMenu.classList.add('_onscroll');
		headerLogoLink.classList.add('_onscroll');
		headerMainMenu.classList.add('_onscroll');
		for (const navLink of headerNavLinks) {
			navLink.classList.add('_onscroll');
		}
	} else if (scrollTop < 50) {
		headerTopMenu.classList.remove('_onscroll');
		headerLogoLink.classList.remove('_onscroll');
		headerMainMenu.classList.remove('_onscroll');
		for (const navLink of headerNavLinks) {
			navLink.classList.remove('_onscroll');
		}
	}
};

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

/*-------------Переключение дополнительного меню при нажатии на nav-hamburger и hamburger -------------*/
const navMenuHamburger = document.querySelector('.header__nav-hamburger');
const navMenu = document.querySelector('.header__nav-content');
const menuHamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__main-menu');

const toggleNavMenu = () => {
	navMenu.classList.toggle('_active');
	navMenuHamburger.classList.toggle('_active');
};
const toggleMenu = () => {
	menu.classList.toggle('_active');
	menuHamburger.classList.toggle('_active');
};
 
navMenuHamburger.addEventListener('click', evt => {
	evt.stopPropagation();
	toggleNavMenu();	
});

menuHamburger.addEventListener('click', evt => {
	evt.stopPropagation();
	toggleMenu();
	if (menu.classList.contains('_active')) {
		bodyLock();
		} else {
		bodyUnLock();
		}
});

document.addEventListener('click', evt => {
	let target = evt.target;
	let its_navMenu = target == navMenu || navMenu.contains(target);
	let its_navMenuHamburger = target == navMenuHamburger;
	let navMenu_is_active = navMenu.classList.contains('_active');
	let its_menu = target == menu || menu.contains(target);
	let its_menuHamburger = target == menuHamburger;
	let menu_is_active = menu.classList.contains('_active');
	const popupActive = document.querySelector('.popup._open');
	
	if (!its_navMenu && !its_navMenuHamburger && navMenu_is_active) {
		toggleNavMenu();
	}
	if (!its_menu && !its_menuHamburger && menu_is_active && !popupActive) {
		toggleMenu();
		bodyUnLock();
	}
});

/* -------------Карусель slick для feedbacks ------------- */
$(document).ready(function(){
	$('.feedbacks__slider-track').slick({
		dots: false,
		arrows: true,
		appendArrows: $('.feedbacks__slider-buttons'),
		prevArrow: $('.feedbacks__arrow-prev'),
		nextArrow: $('.feedbacks__arrow-next'),
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		zIndex: 3,
		responsive: [
		{
			breakpoint: 1146,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 782,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});

/*  -------------Разворачивание/сворачивание footer при нажатии на стрелку -------------*/
const footerArrow = document.querySelector('.footer__arrow');
const footerColumn = document.querySelector('.footer__column');

footerArrow.addEventListener('click', () => {
	footerArrow.classList.toggle('_active');
	footerColumn.classList.toggle('_active');
});

/*  -------------Переключение табов в попап-окне регистрации -------------*/
const registrationForm = document.querySelector('#registrationForm');
const clientTab = registrationForm.querySelector('#clientTab');
const performerTab = registrationForm.querySelector('#performerTab');
const activeTab = registrationForm.querySelector('.popup__tab-switch_active');
const loginFormForClient = registrationForm.querySelector('.login-form_for-client');
const loginFormForPerformer = registrationForm.querySelector('.login-form_for-performer');

$(document).ready(function(){
	$('.popup__tab-switch').click(function (evt) {
		evt.preventDefault();

		$('.popup__tab-switch').removeClass('popup__tab-switch_active');
		$('.login-form').removeClass('login-form_active');

		$(this).addClass('popup__tab-switch_active');
		$($(this).attr('href')).addClass('login-form_active');
	});
});

/*---------Проверка мейла и комбинаций символов при вводе пароля------------*/
$(document).ready(function () {
	let email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
	$("input[name='clientEmail']").change(function () {
		let email_1 = $("input[name='clientEmail']").val();	
		if (!email_regexp.test(email_1)) {
			$("input[name='clientEmail']")
				.addClass("_invalid-field");
		} else {
			$("input[name='clientEmail']")
				.removeClass("_invalid-field");
		}	
	});
	$("input[name='performerEmail']").change(function () {
		let email_2 = $("input[name='performerEmail']").val();
		if (!email_regexp.test(email_2)) {
			$("input[name='performerEmail']")
				.addClass("_invalid-field");
		} else {
			$("input[name='performerEmail']")
				.removeClass("_invalid-field");
		}		
	});
	$("input[type='password']").change(function () {		
		let password_1 = $("input[name='clientPassword1']").val();
		let password_2 = $("input[name='clientPassword2']").val();
		let password_3 = $("input[name='performerPassword1']").val();
		let password_4 = $("input[name='performerPassword2']").val();
		if ($("div").is(".login-form__field_password")) {
			if (password_1 !== password_2 && password_1 !== "" && password_2 !== "") {
				$("input[name='clientPassword2']")
				.addClass("_invalid-field");
			}
			else {
				$("input[name='clientPassword2']")
				.removeClass("_invalid-field");
			}
			if (password_3 !== password_4 && password_3 !== "" && password_4 !== "") {
				$("input[name='performerPassword2']")
				.addClass("_invalid-field");
			}
			else {
				$("input[name='performerPassword2']")
				.removeClass("_invalid-field");
			}			
		}		
	});
});

/*---------Проверка паролей и мейла перед отправкой формы------------*/
let clientRegistrationForm = registrationForm.querySelector('.login-form_for-client');
let performerRegistrationForm = registrationForm.querySelector('.login-form_for-performer');

function validateClientForm() {	
	let password_1 = document.querySelector("input[name='clientPassword1']");
	let password_2 = document.querySelector("input[name='clientPassword2']");
	let popupFormSubmitBtn1 = document.querySelector('#loginFormButtonClient');

	if (password_1.value !== password_2.value && password_1.value !== "" && password_2.value !== "") {		
		popupFormSubmitBtn1.value = "Проверьте пароли!";
		return false;	
	} else {
		popupFormSubmitBtn1.value = "Вход";
	}	
	
	let email_1 = document.querySelector('input[name="clientEmail"]');
	let email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;

	if (!email_regexp.test(email_1.value)) {
		popupFormSubmitBtn1.value = "Проверьте email";
		return false;
	} else {
		popupFormSubmitBtn1.value = "Вход";
	}	
}

function validatePerformerForm() {
	
	let password_3 = document.querySelector("input[name='performerPassword1']");
	let password_4 = document.querySelector("input[name='performerPassword2']");
	let popupFormSubmitBtn2 = document.querySelector('#loginFormButtonPerformer');

	if (password_3.value !== password_4.value && password_3.value !== "" && password_4.value !== "") {		
		popupFormSubmitBtn2.value = "Проверьте пароли!";
		return false;		
	} else {
		popupFormSubmitBtn2.value = "Вход";
	}

	let email_2 = document.querySelector('input[name="performerEmail"]');
	let email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;

	if (!email_regexp.test(email_2.value)) {
		popupFormSubmitBtn2.value = "Проверьте email";
		return false;
	} else {
		popupFormSubmitBtn2.value = "Вход";
	}
}

clientRegistrationForm.onsubmit = () => {	
	return validateClientForm();
};

performerRegistrationForm.onsubmit = () => {	
	return validatePerformerForm();
};

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

