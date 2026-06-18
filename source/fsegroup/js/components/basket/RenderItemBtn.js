import CreateElement from "../CreateElement.js"
import FromItem from './FromItem.js'
import Change from "./Change.js"
import Basket from "./Basket.js"
import ProductCard from "../ProductCard.js"

export default class RenderItemBtn {
    static start(id, price, container) {        
        container.innerHTML = ''
        let button = CreateElement.create('button', {
            class: 'button-btn_secondary',
            content: 'В корзину',
            attribute: {'item-button': '', 'add-basket': '', 'data-id': id, 'data-price': price}
        })
        container.append(button)
        button.addEventListener('click', () => {
            let parent = button.closest('[product-item]')
            let picture = null
            if (parent) {
                picture = parent.querySelector('[product-item-image]')
            }
            if (picture) {
                FromItem.move(picture, document.querySelector('[basket-move]'))
            }
            Change.add(id, price)
            Basket.updateBasket()
            this.render(id, price)
        })
    }
    static advanced(id, price, qtn, container, parent) {
        container.innerHTML = ''
        let element = CreateElement.create('div', {
            class: 'item-advanced flex-fl_between-fl_cross-cnt',
            attribute: {'item-button': '', 'data-id': id, 'data-price': price}
        })
        let text = CreateElement.create('span', {class: 'item-advanced-text', content: 'В корзине'})

        let count = CreateElement.create('div', {class: 'item-advanced-count flex-fl_cross-cnt-fl_between'})

        let minus_icon = '<svg viewBox="0 0 12 1"><path d="M8.5 0.5H4.5H0.5" stroke-linecap="round"/></svg>'
        let minus = CreateElement.create('button', {
            class: 'flex-fl_center', 
            html: minus_icon, 
            attribute: {'type': 'button', 'minus-item': ''}
        })

        let total = CreateElement.create('span', {class: 'flex-fl_center', content: qtn})

        let plus_icon = '<svg viewBox="0 0 18 19"><path d="M9.5 12.5V8.5M9.5 8.5V4.5M9.5 8.5H13.5M9.5 8.5H5.5" stroke-linecap="round"/></svg>'        
        let plus = CreateElement.create('button', {
            class: 'flex-fl_center', 
            html: plus_icon, 
            attribute: {'type': 'button', 'plus-item': ''}
        })

        count.append(minus, total, plus)

        if (parent.getAttribute('product-item') == '1') {
            element.append(text)
        } else {
            element.append(text, count)
        }
        container.append(element)

        plus.addEventListener('click', () => {
            Change.add(id, price)
            Basket.updateBasket()
            this.render(id, price, container, parent)
        })

        minus.addEventListener('click', () => {
            Change.remove(id)
            Basket.updateBasket()
            this.render(id, price, container, parent)
        })
    }

    static render(product, price, container = null, parent = null) {
        let array = JSON.parse(localStorage.getItem('basket'))
        if(!array) return
        let result = array.findIndex((obj => obj.id == product))
        let products = document.querySelectorAll('[data-id="' + product + '"]')
        products.forEach((el) => {
            if (!container) container = el.parentElement            
            if (!parent) parent = el.closest('[product-item]')
            if (result === -1) {
                container.classList.remove('product-in-cart') 
                this.start(product, price, container)
            } else {
                let qtn = array[result].count
                this.advanced(product, price, qtn, container, parent)
            }
        })
        ProductCard.start()
    }

    static renderAll(selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[item-button]'
        let itemButton = document.querySelectorAll(defaultSelector)
        let array = JSON.parse(localStorage.getItem('basket'))
        if (!itemButton) return 
        itemButton.forEach((el) => {
            if (array && array.length != 0) {
                let product = el.getAttribute('data-id')
                array.forEach((e) => {
                    if (product === e.id) { 
                        let products = document.querySelectorAll('[data-id="' + e.id + '"]')
                        products.forEach((el) => {
                            let container = el.parentElement
                            container.classList.add('product-in-cart') 
                            let parent = el.closest('[product-item]')
                            this.advanced(e.id, e.price, e.count, container, parent)
                        })
                    }
                })
            }
        })
        ProductCard.start()
    }
}