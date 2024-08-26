const textCopy = (() => {
  document.oncopy = () => {
    let body = document.getElementsByTagName('body')[0]
    let selection = window.getSelection()
    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.left = '-99999px'
    body.appendChild(div)
    div.innerHTML = selection + ' Источник ' + window.location.href
    selection.selectAllChildren(div)
    window.setTimeout(() => body.removeChild(div), 0)
  }
})()

const imageCopy = (() => {
  document.oncontextmenu = (e) => {
    let errorMsg = "Изображения на сайте защищены авторским правом"
    let clickedEl = (e == null) ? e.srcElement.tagName : e.target.tagName;
    if (clickedEl == "IMG") {
      alert(errorMsg)
      return false
    }
  }
})()

// Маска телефона
VMasker(document.querySelectorAll(".phone-input")).maskPattern("9 (999) 999-9999");


// Модальные окна
let modal
const popup = (link) => {
    modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Закрыть",
    onClose: function () {
    let tool = document.querySelectorAll('.tooltip-form-main')
    tool.forEach((el) => el.classList.remove('tooltip-visibile'))
    let input = document.querySelectorAll('.form-input')
    input.forEach((el) => el.classList.remove('form-error-border'))
    let label = document.querySelectorAll('.form-policy')
    label.forEach((el) => el.classList.remove('form-error-border'))
  }
})
    modal.open()
    modal.setContent(document.querySelector(`#${link}`))
}

// Функция отправки формы
const ajaxSend = async (formData) => {
const fetchResp = await fetch('/', {
	method: 'POST',
	headers: {
		"X-Requested-With": "XMLHttpRequest"
	},
	body: formData
})
if (!fetchResp.ok) {
	throw new Error(`Ошибка, статус ошибки ${fetchResp.status}`)
}
return await fetchResp.text()
}

// Закрытие tooltip при фокусе инпута
const tooltip = (() => {
	let tool = document.querySelectorAll('.tool-focus')
	tool.forEach((el) => {
	el.addEventListener('focus', () => {
		if (el.nextElementSibling.classList.contains('tooltip-visibile')) {
			el.nextElementSibling.classList.remove('tooltip-visibile')
		}
		if (el.classList.contains('form-error-border')) {
			el.classList.remove('form-error-border')
		}
		if (el.parentElement.classList.contains('form-error-border')) {
			el.parentElement.classList.remove('form-error-border')
		}
	})
	})
})()

// Провека, отмечена ли галочка на политику конфиденциальности
const checkForm = (check, form) => {
	let checkbox = document.querySelector(`#${check}`)
	  if (checkbox.checked) {
		 sendForm(form)
	  } else {
		 let err = document.querySelector(`#tooltip-${check}`)
		 err.classList.add('tooltip-visibile')
		 err.parentElement.classList.add('form-error-border')
	  }
  }
  	
//Функции отправки форм
const sendForm = (el) => {
let form = document.querySelector(`#${el}`)
const formData = new FormData(form)
ajaxSend(formData)
	.then((response) => {
	let message
	let resp = JSON.parse(response)
	if (resp.type == 'none') {
		form.reset()
		if (modal) modal.close()
		popup('error-popup')
		setTimeout(() => modal.close(), 3000)
	} else if (resp.type == 'input') {
		for (let prop in resp.message) {
		message = form.querySelector('.tooltip-' + resp.message[prop].name)
		message.classList.add('tooltip-visibile')
		message.children[0].innerHTML = resp.message[prop].text
		message.previousElementSibling.classList.add('form-error-border')
		}
	} else if (resp.type == 'yes') {
		form.reset()
		if (modal) modal.close()
		popup('success-popup')
		setTimeout(() => modal.close(), 3000)
	}
	})
	.catch((err) => {
	form.reset()
	if (modal) modal.close()
	popup('error-popup')
	setTimeout(() => modal.close(), 3000)
	})
}

window.onresize = function() {
	let width = window.screen.width;
	if (width < 481) { 
		let images = document.querySelectorAll('[data-bg-mobile]');
		for (let i = 0; i < images.length; i++) {
			let image = images[i].getAttribute('data-bg-mobile');
			images[i].style.backgroundImage = 'url(' + image + ')';	
		}
	} else {
		let images = document.querySelectorAll('[data-bg-desktop]');
		for (let i = 0; i < images.length; i++) {
			let image = images[i].getAttribute('data-bg-desktop');
			images[i].style.backgroundImage = 'url(' + image + ')';	
		}  
	}
}; 
window.onload = function() {
	let el = document.querySelectorAll('.filter-image')
	if (navigator.userAgent.includes('Firefox')) {
		for (let i = 0; i < el.length; i++) {
			el[i].classList.add('mozilla-filter')	
		}  
	}
}
