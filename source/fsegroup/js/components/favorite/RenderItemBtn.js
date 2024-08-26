import CreateElement from "../CreateElement.js"
import Change from "./Change.js"
import Favorite from "./Favorite.js"
import ProductCard from "../ProductCard.js"

export default class RenderItemBtn {
    static start(id) {
        let products = document.querySelectorAll('[data-fav-id="' + id + '"]')
        products.forEach((product) => {
            let container = product.parentElement
            container.innerHTML = ''
            let fav_icon = '<svg><use href="/img/sprite.svg#fav-good"></use></svg>'
            let button = CreateElement.create('button', {
                class: 'button', 
                html: fav_icon, 
                attribute: {'type': 'button', 'data-fav-id': id, 'fav-button': '', 'add-favorite': ''}
            })
            container.append(button)
            button.addEventListener('click', () => {
                Change.add(id)
                Favorite.updateFavorite()
                this.render(id)
            })
        })
    }
    static advanced(id) {
        let products = document.querySelectorAll('[data-fav-id="' + id + '"]')
        products.forEach((product) => {
            let container = product.parentElement
            container.innerHTML = ''
            let fav_icon = '<svg><use href="/img/sprite.svg#faved-good"></use></svg>'
            let button = CreateElement.create('button', {
                class: 'button', 
                html: fav_icon, 
                attribute: {'type': 'button', 'data-fav-id': id, 'fav-button': '', 'add-favorite': ''}
            })
            container.append(button)
            button.addEventListener('click', () => {
                Change.remove(id)
                Favorite.updateFavorite()
                this.render(id)
            })
        })
    }

    static render(product) {
        let array = JSON.parse(localStorage.getItem('favorite'))
        if (!array) return
        let result = array.findIndex((obj => obj.id == product))
        if (result === -1) {
            this.start(product)
        } else {
            this.advanced(product)
        }
        ProductCard.start()
    }

    static renderAll(selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[fav-button]'
        let favButton = document.querySelectorAll(defaultSelector)
        let array = JSON.parse(localStorage.getItem('favorite'))
        if (!array || !favButton) return 
        favButton.forEach((el) => {
            if (array && array.length != 0) {
                let product = el.getAttribute('data-fav-id')
                array.forEach((e) => {
                    if (product === e.id) { 
                        this.advanced(e.id)
                    }
                })
            }
        })
        ProductCard.start()
    }
}