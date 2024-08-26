import CreateElement from '../CreateElement.js'
import Change from './Change.js'
import Basket from './Basket.js'

export default class Render {

    static empty() {
        let selector = document.querySelector('#render')
        selector.innerHTML = ''
        let div = CreateElement.create('div', {class: 'empty-basket flex-fl_column-fl_center'})
        let h2 = CreateElement.create('h2', {content: 'Корзина пуста'})
        let p = CreateElement.create('p', {content: 'Вы еще ничего не добавили в корзину'})
        let a = CreateElement.create('a', {
            class: 'button-btn_main flex-fl_center', 
            html: '<span>Перейти в каталог</span>', 
            attribute: {'href': '/shop'} 
        })
        div.append(h2, p, a)
        selector.append(div)
    }

    static item() {
        let container = document.querySelector('[basket-container]')
        if (!container) return
        let clear = document.querySelectorAll('[clear-cart]')
        clear.forEach((el) => {
            el.addEventListener('click', () => {
                Change.clear()
                this.empty()
                Basket.updateBasket()
            })
        })

        let items = document.querySelectorAll('[basket-item]')
        if (items.length == 0) {
            Change.clear()
            this.empty()
            Basket.updateBasket()
        } else {
            items.forEach((el) => {
                let plus = el.querySelector('[plus-item]')
                let minus = el.querySelector('[minus-item]')
                let del = el.querySelector('[delete-item]')
                
                plus.addEventListener('click', () => {
                    Change.add(plus.getAttribute('data-id'), plus.getAttribute('data-price'))
                    this.render(plus.getAttribute('data-id'), plus.getAttribute('data-price'))
                    Basket.updateBasket()
                })
        
                minus.addEventListener('click', () => {
                    Change.remove(minus.getAttribute('data-id'))
                    this.render(minus.getAttribute('data-id'), minus.getAttribute('data-price'))
                    Basket.updateBasket()
                })
      
                del.addEventListener('click', () => {
                    Change.remove(del.getAttribute('data-id'), true)
                    let array = JSON.parse(localStorage.getItem('basket'))
                    if (array.length == 0) {
                        this.empty()
                    } else {
                        el.remove()
                    }
                    Basket.updateBasket()
                })

            })
        }
    }

    static render(idItem, priceItem) {
        let container = document.querySelector(`[basket-item="${idItem}"]`)
        let totalItem = container.querySelector('[total-item]')
        let button = container.querySelector('[button-item]')
        button.innerHTML = '';

        let array = JSON.parse(localStorage.getItem('basket'))
        if(!array) return
        if (array.length == 0) {
            this.empty()
        } else {
            let result = array.findIndex((obj => obj.id == idItem))
            if (result === -1) {
                container.remove()
            } else {
                if (priceItem != 0) {
                    totalItem.textContent = (parseInt(array[result].count)*priceItem).toLocaleString('ru') + ' Р'
                }

                let minus = CreateElement.create('button', {
                    class: 'button flex-fl_center', 
                    html: '<svg><use href="/img/sprite.svg#minus"></use></svg>', 
                    attribute: {'type': 'button', 'minus-item': '', 'data-id': idItem, 'data-price': priceItem} 
                })

                let plus = CreateElement.create('button', {
                    class: 'button flex-fl_center', 
                    html: '<svg><use href="/img/sprite.svg#plus"></use></svg>', 
                    attribute: {'type': 'button', 'plus-item': '', 'data-id': idItem, 'data-price': priceItem} 
                })

                let count = CreateElement.create('span', {
                    class: 'flex-fl_center', 
                    content: array[result].count
                })

                button.append(minus, count, plus)

                plus.addEventListener('click', () => {
                    Change.add(idItem, priceItem)
                    this.render(idItem, priceItem)
                    Basket.updateBasket()
                })
    
                minus.addEventListener('click', () => {
                    Change.remove(idItem)
                    this.render(idItem, priceItem)
                    Basket.updateBasket()
                })
            }
        }
    }

    static full() {
        return
    }
}