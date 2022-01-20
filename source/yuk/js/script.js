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

 /*-------------Фиксированный header при скролле -------------*/
window.onscroll = () => {
	let header = document.querySelector('.header');
	let headerLogoLink = document.querySelector('.header__logo-link');
	let headerNavLinks = document.querySelectorAll('.header__nav-link');
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	if (scrollTop > 50) {
		header.classList.add('_onscroll');
		headerLogoLink.classList.add('_onscroll');
		for (const navLink of headerNavLinks) {
			navLink.classList.add('_onscroll');
		}
	} else if (scrollTop < 50) {
		header.classList.remove('_onscroll');
		headerLogoLink.classList.remove('_onscroll');
		for (const navLink of headerNavLinks) {
			navLink.classList.remove('_onscroll');
		}
	}
};

/*  -------------Разворачивание/сворачивание footer при нажатии на стрелку -------------*/
const footerArrow = document.querySelector('.footer__arrow');
const footerColumn = document.querySelector('.footer__column');

footerArrow.addEventListener('click', () => {
	footerArrow.classList.toggle('_active');
	footerColumn.classList.toggle('_active');
});
