export default class HideShow {
    close(button, content) {
        let button_array = document.querySelectorAll(button)
        let content_array = document.querySelectorAll(content)
        if (!button_array || !content_array) return
        button_array.forEach((el) => {
            if (el.classList.contains('active')) el.classList.remove('active')
        })
        content_array.forEach((el) => {
            if (el.classList.contains('active')) el.classList.remove('active')
        })
    }

    open(button, content) {
        let button_array = document.querySelectorAll(button)
        if (!button_array) return
        button_array.forEach((el) => {
            el.addEventListener('click', () => {
                let element = el.getAttribute(button.replace(/[\[\]']+/g,''))
                this.close(button, content)
                el.classList.add('active')
                document.querySelector(`#${element}`).classList.add('active')
            })
        })
    }

    destroy(button, content) {
        let button_array = document.querySelectorAll(button)
        let content_array = document.querySelectorAll(content)
        button_array.forEach((el) => {
            el.classList.add('destroy')
            if (el.classList.contains('active')) el.classList.remove('active')
        })
        content_array.forEach((el) => {
            el.classList.add('destroy')
            el.classList.add('active')
        })
    }
}