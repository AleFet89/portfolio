export default class OpenElement {
    constructor(selector) {
        this.selector = selector
    }
    close(show, click, element) {
        document.addEventListener('click', (e) => {
            let t = e.target
            let content = document.querySelectorAll(`.${show}`)
            let button = document.querySelector('[button-element]')
            content.forEach((el) => {
                if (!el.contains(t) && !element.contains(t) && !button.contains(t)) {
                    if (el.classList.contains(show)) {
                        el.classList.remove(show)
                        element.classList.remove(click)
                    }
                }
            })
        })
    }

    open(show, click) {
        let array = document.querySelectorAll(this.selector)     
        if (!array) return
        array.forEach((el) => {
            el.addEventListener('click', () => {
                let attr = el.getAttribute(this.selector.replace(/[\[\]']+/g,''))
                let element = document.querySelector(`[${attr}]`)
                let content = document.querySelectorAll(`.${click}`)
                if (content) {
                    content.forEach((e) => {
                        let elem = document.querySelector(`[${e.getAttribute(this.selector.replace(/[\[\]']+/g,''))}]`)
                        if (!elem.matches(`[${attr}]`)) {
                            e.classList.remove(click)
                            elem.classList.remove(show)
                        }
                    })
                }
                element.classList.toggle(show)
                el.classList.toggle(click)
                this.close(show, click, el)
            })
        })
    }

}