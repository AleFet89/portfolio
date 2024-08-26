import CreateElement from "../CreateElement.js"
import RenderBtn from './RenderItemBtn.js'

export default class Update {
    static type = 'good'

    static array() {
        let array = JSON.parse(localStorage.getItem('basket'))
        return array
    }

    static count() {
        let array = this.array()
        let count = 0
        if (array && array.length != 0) {
            array.forEach((el) => {
                count = count + parseInt(el.count)
            })
        }
        return count
    }
    static price() {
        let array = this.array()
        let price = 0
        if (array && array.length != 0) {
            array.forEach((el) => {
                price = price + parseInt(el.count) * parseInt(el.price)
            })
        }
        return price
    }

    static word(words, count) {
        let word = words[0]
        if (count % 100 < 5 || count % 100 > 20) {
            if (count % 10 == 1) word = words[1]
            if (count % 10 > 1 && count % 10 < 5) word = words[2]
        }
        return count + ' ' + word
    }

    static updateCount(selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[basket-count]'
        let basketCount = document.querySelectorAll(defaultSelector)
        let array = this.array()
        if (!basketCount) return
        basketCount.forEach((el) => {
            if (array && array.length != 0) {
                el.textContent = this.count()
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })
    }

    static updatePrice(selector = null) {
        let words = ['товаров', 'товар', 'товара']
        if (this.type == 'service') words = ['услуг', 'услуга', 'услуг']
        let defaultSelector = (selector !== null) ? selector : '[basket-price]'
        let basketPrice= document.querySelectorAll(defaultSelector)
        let array = this.array()
        if (!basketPrice) return
        basketPrice.forEach((el) => {
            if (array && array.length != 0) {
                el.innerHTML = '';
                let countWord = this.word(words, this.count())
                let content = '<span>В корзине ' + countWord + ' на сумму </span>' + '<span>' + this.price() + ' ₽</span>'
                let tag = CreateElement.create('a', {'html': content, 'attribute': {'href': '/cart'} })
                el.append(tag) 
            } else {
                el.innerHTML = '<span>Корзина пуста</span>';
            }
        })
    }

    static updateMessage(selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[item-message]'
        let itemMessage = document.querySelectorAll(defaultSelector)
        let array = this.array()
        if (!itemMessage) return 
        itemMessage.forEach((el) => {
            if (array && array.length != 0) {
                let message = el.getAttribute('data-id')
                array.forEach((e) => {
                    if (message === e.id) { 
                        el.textContent = 'В корзине'
                        el.style.zIndex = '5'
                    }
                })
             }
        })
    }

    static updateButton(selector = null) {        
        let defaultSelector = (selector !== null) ? selector : '[item-button]'
        let itemButton = document.querySelectorAll(defaultSelector)
        let array = this.array()
        if (!itemButton) return 
        itemButton.forEach((el) => {
            if (array && array.length != 0) {
                let message = el.getAttribute('data-id')
                array.forEach((e) => {
                    if (message === e.id) { 
                        el.textContent = 'В корзине'
                        el.classList.add('active')
                    }
                })
            }
        })
    }

    static updateBasket(selector = null) {   
        let defaultSelector = (selector !== null) ? selector : '[total-cart]'     
        let totalContainer = document.querySelectorAll(defaultSelector)
        let array = this.array()
        if (!totalContainer) return 
        totalContainer.forEach((el) => {
            if (array && array.length != 0) {
                el.innerHTML = '';
                let content = this.price().toLocaleString('ru') + ' Р' 
                el.innerHTML = content
            }
        })
    }

    static updateItemBtn() {
        RenderBtn.renderAll()
    }

    static updateAll() {
        this.updateCount()
        this.updatePrice()
        this.updateBasket()
        this.updateItemBtn()
    }

}