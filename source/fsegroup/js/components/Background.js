// Фоновое изображение в зависимости от разрешения экрана
export default class Background {
	static render() {
		let width = window.screen.width
		let images = document.querySelectorAll('[render-bg]')
		let attr
		for (let i = 0; i < images.length; i++) {
			let defaultBg = images[i].getAttribute('data-bg-default')
			if (width < 481) { 
				attr = images[i].getAttribute('data-bg-mobile')
			} else if (width > 480 && width < 1024) {
				attr = images[i].getAttribute('data-bg-tablet')
			} else {
				attr = images[i].getAttribute('data-bg-desktop')
			}
			let image = attr ? attr : defaultBg
			images[i].style.backgroundImage = 'url(' + image + ')'
		}
	}
	static renderImg() {
		let width = window.screen.width
		let images = document.querySelectorAll('[render-option-bg]')
		let attr
		for (let i = 0; i < images.length; i++) {
			let defaultBg = images[i].getAttribute('option-bg-default')
			if (width < 481) { 
				attr = images[i].getAttribute('option-bg-mobile')
			} else if (width > 480 && width < 1024) {
				attr = images[i].getAttribute('option-bg-tablet')
			} else {
				attr = images[i].getAttribute('option-bg-desktop')
			}
			let image = attr ? attr : defaultBg
			images[i].style.backgroundImage = 'url(' + image + ')'
		}
	}
	static renderImgTag() {
		let width = window.screen.width
		let images = document.querySelectorAll('[render-option-img]')
		let attr
		for (let i = 0; i < images.length; i++) {
			let defaultBg = images[i].getAttribute('option-img-default')
			if (width < 481) { 
				attr = images[i].getAttribute('option-img-mobile')
			} else if (width > 480 && width < 1024) {
				attr = images[i].getAttribute('option-img-tablet')
			} else {
				attr = images[i].getAttribute('option-img-desktop')
			}
			let image = attr ? attr : defaultBg
			images[i].src = image
		}
	}
}