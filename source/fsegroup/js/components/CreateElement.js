// Создание нового тега, добавление классов, атрибутов и вложенных элементов
export default class CreateElement {
    static create(el, option = null) {
        let element = document.createElement(el)
        if (option !== null) {
            if (option.class) element.className = option.class
            if (option.content) element.textContent = option.content
            if (option.html) element.innerHTML = option.html
            if (typeof option.attribute === 'object') {
                for (let key in option.attribute) {
                    element.setAttribute(key, option.attribute[key]) 
                }
            }
        }
        return element
    }
}