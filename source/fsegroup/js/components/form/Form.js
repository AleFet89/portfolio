import CreateElement from '../CreateElement.js'
import Check from './Check.js'
import Fetch from './Fetch.js'
import Tooltip from './Tooltip.js'

export default class Form {
    static message(selector, content) {
		let block = document.querySelector(selector)
        let text = block.querySelector('[message-popup]')
        text.innerHTML = ''
        let h3 = CreateElement.create('h3', {html: content[0]})
        let div = CreateElement.create('div', {html: content[1]})
        text.append(h3, div)
	}

    static form(form, popup) {
        const formData = new FormData(form)
        let fileInpit = document.querySelector('[name="file"]')
        if (fileInpit) {
            let file = fileInpit.files[0]
            formData.append('file', file)
        }
        Fetch.request(formData)
        .then((response) => {
            let message;
            let resp = JSON.parse(response);
            if (resp.type == 'none') {
                this.message('#error-popup', resp.text)
                popup.confirm('#error-popup')
                setTimeout(() => popup.close(), 3000)	
            } else if (resp.type == 'error') {
                for (let prop in resp.message) {
                    message = form.querySelector(`[${resp.message[prop].name}]`)                  
                    message.classList.add('tooltip-visibile')
                    message.children[0].innerHTML = resp.message[prop].text  
                    message.previousElementSibling.classList.add('form-error-border')                  
                }
                Tooltip.closeOnFocus()
            } else if (resp.type == 'yes') {
                form.reset()
                this.message('#success-popup', resp.text)
                popup.confirm('#success-popup') 
                setTimeout(() => popup.close(), 3000)		 		    		 
            } else if (resp.type == 'order') {
                this.message('#success-popup', resp.text)
                popup.confirm('#success-popup') 
                localStorage.removeItem('basket')
                setTimeout(() => window.location.href = '/', 3000)		 		    		 
            } else if (resp.type == 'login') {
                window.location.href = '/lk'		 		    		 
            } else if (resp.type == 'reg') {
                form.reset()
                this.message('#lk-popup', resp.text)
                popup.confirm('#lk-popup')
            } else if (resp.type == 'lk') {
                this.message('#success-popup', resp.text)
                popup.confirm('#success-popup') 
                setTimeout(() => popup.close(), 3000)		 		    		 
            }
        })
        .catch((error) => {
            popup.confirm('#server-popup') 
            setTimeout(() => popup.close(), 3000)
        })
    }

    static send(popup, selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[form-container]'
        let formArray = document.querySelectorAll(defaultSelector)
        formArray.forEach((el) => {
            el.addEventListener('submit', (e) => {
                e.preventDefault()
                if (!Check.validation(el)) return false
                this.form(el, popup)
            })
        })
    }

    static lk(popup, selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[form-login]'
        let formArray = document.querySelectorAll(defaultSelector)
        formArray.forEach((el) => {
            el.addEventListener('submit', (e) => {
                e.preventDefault()
                this.form(el, popup)
            })
        })
    }
}