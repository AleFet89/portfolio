import Tooltip from './form/Tooltip.js'

export default class Popup {
    constructor() {
        this.modal
    }
    start() {
        this.modal = new tingle.modal({
            footer: false,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Закрыть",
            onClose: function () {
              Tooltip.close()
            }
        })
    }
    open(selector = null) {
        selector = (selector !== null) ? selector : '[popup-open]'
        let link = document.querySelectorAll(selector)
        link.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                let attr = el.getAttribute(selector.replace(/[\[\]']+/g,''))
                let product = el.getAttribute('data-good-id')
                let formInput = document.querySelector('[name="id_product"]')
                formInput.value = product
                this.start()
                this.modal.open()
                this.modal.setContent(document.querySelector(`#${attr}`))
            })
        })
    }

    test(selector) {
            this.start()
            this.modal.open()
            this.modal.setContent(document.querySelector(selector))
    }
    confirm(selector) {
        if(this.modal !== undefined) this.modal.close()
        this.start()
        this.modal.open()
        this.modal.setContent(document.querySelector(selector))
    }
    close() {
        this.modal.close()
    }
}