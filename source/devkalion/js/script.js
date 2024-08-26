const getCookie = (name) => {
   let matches = document.cookie.match(new RegExp(
   "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
   return matches ? decodeURIComponent(matches[1]) : undefined
}

const informCookie = (() => {
	let cookie_inform = getCookie("cookieinform")
	let cookie_notice = document.querySelector('#cookie-notice')
	if (cookie_inform != "no" && cookie_notice) {
	  cookie_notice.style.display = "block"
	  document.querySelector("#cookie-close").addEventListener("click", () => {
		 cookie_notice.style.display = "none"
		 let date = new Date
		 date.setDate(date.getDate() + 1)
		 document.cookie = "cookieinform=no; sameSite=Lax; path=/; expires=" + date.toUTCString()
	  })
	}
})()
 
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

// Модальные окна
let modal;
let body = document.querySelector('body');
let bodyContainer = document.querySelector('.body-container');
let headerContainer = document.querySelector('.header-container');
let mainContainer = document.querySelector('.main-container');
let footerContainer = document.querySelector('.footer-container');
let popupContainer = document.querySelector('.tingle-modal');
let cookieContainer = document.querySelector('.cookie-container');

const popup = (link) => {		
	document.body.style.overflowY = 'scroll';
	headerContainer.classList.add('blur');
	mainContainer.classList.add('blur');
	footerContainer.classList.add('blur');
	cookieContainer.classList.add('blur');
    modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Закрыть",
		onClose: function () {
		document.body.style.overflowY = '';
		headerContainer.classList.remove('blur');
		mainContainer.classList.remove('blur');
		footerContainer.classList.remove('blur');
		cookieContainer.classList.remove('blur');
    let tool = document.querySelectorAll('.tooltip-form')
    tool.forEach((el) => el.classList.remove('tooltip-visibile'))
    let input = document.querySelectorAll('.form-input')
    input.forEach((el) => el.classList.remove('form-error-border'))
    let label = document.querySelectorAll('.form-policy')
	 label.forEach((el) => el.classList.remove('form-error-border'))
	 let burgerMenu = document.querySelector('.burger-btn');
		if (burgerMenu.classList.contains('open')) {
			document.querySelector('body').style.overflow = 'hidden';
		}
   }
})
   modal.open()
	modal.setContent(document.querySelector(`#${link}`))	
}

// Маска телефона
VMasker(document.querySelectorAll(".phone-input")).maskPattern("9 (999) 999-9999");

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
 
// Бургер меню
const burger = (() => {
	let menu = document.querySelector('#burger-button');
	menu.addEventListener('click', () => {
	  menu.classList.toggle('open')
	  if (menu.classList.contains('open')) {
		 document.body.style.setProperty('overflow', 'hidden')
	  } else {
		  document.body.style = '';
	  }
	})
})()

// Поиск города
const citySearch = (input) => {
	let city_search = input.value.charAt(0).toUpperCase() + input.value.slice(1)
	let city_array = document.querySelectorAll('.city-item')
	if (city_array && city_search.length >= 3) {
	  city_array.forEach((el) => {
		 if (el.textContent != city_search)
			 if(el.textContent.indexOf(city_search) === -1) {
				el.classList.add('city-hidden') 
             }
      })
	} else if (city_search.length == 0) {
	  city_array.forEach((el) => {
         el.classList.remove('city-hidden')
      })
	}
}

let city_popup = document.querySelector('.city-popup');
let city_input = document.querySelector('.input-city-field');
let city_dropdown = document.querySelector('.city-dropdown');
 
city_input.addEventListener('click', evt => {
	evt.stopPropagation();	
	city_dropdown.classList.add('active');
	city_input.classList.add('active');	
});
city_popup.addEventListener('click', evt => {
	evt.stopPropagation();	
	city_popup.classList.toggle('open');	
	city_input.classList.toggle('open');	
});

document.addEventListener("click", evt => {
	let target = evt.target;
	let its_dropdown = target == city_dropdown || city_dropdown.contains(target);
	let its_input = target == city_input;
	let dropdown_is_active = city_dropdown.classList.contains('active');
	
	if (!its_dropdown && !its_input && dropdown_is_active) {
		city_dropdown.classList.remove('active');
		city_input.classList.remove('active');
	}	
});

document.addEventListener("click", evt => {
	let target = evt.target;
	let city_dropdown = target == city_input || city_input.contains(target);
	let city_input_field = target == city_popup;
	let city_dropdown_is_active = city_popup.classList.contains('open');
	if (!city_dropdown && !city_input_field && city_dropdown_is_active) {
		city_popup.classList.remove('open');
		city_input.classList.remove('open');
	}
});

window.onresize = function() {
	var width = window.screen.width;
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