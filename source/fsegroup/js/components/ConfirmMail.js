import CreateElement from './CreateElement.js'
import Fetch from './form/Fetch.js'

export default class ConfirmMail {
    static message(selector, content) {
		let block = document.querySelector(selector)
        let text = block.querySelector('[message-popup]')
        text.innerHTML = ''
        let h3 = CreateElement.create('h3', {html: content[0]})
        let div = CreateElement.create('div', {html: content[1]})
        text.append(h3, div)
	}

    static request(btn, popup) {
        const formData = new FormData()
        let mail = document.querySelector('[confirm-email]').value
        let client = btn.getAttribute('confirm-type')
        formData.append('modul', 'confirm')
        formData.append('type', client)
        formData.append('mail', mail)
        Fetch.request(formData)
        .then((response) => {
            let resp = JSON.parse(response)
            if (resp.type == 'none') {
                this.message('#error-popup', resp.text)
                popup.confirm('#error-popup')
                setTimeout(() => popup.close(), 3000)
            } else if (resp.type == 'yes') {
                let input = document.querySelector('[confirm-code]')
                input.classList.remove('form-field-hide')
                btn.remove()
            }
        })
        .catch((err) => {
            popup.confirm('#server-popup') 
            setTimeout(() => popup.close(), 3000)
        })
    }
    static start(popup) {
        let btn = document.querySelector('[confirm-button]')
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            this.request(btn, popup)
        })
    }
}