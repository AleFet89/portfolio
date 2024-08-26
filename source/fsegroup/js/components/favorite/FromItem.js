import Change from "./Change.js"
import Favorite from "./Favorite.js"
import RenderBtn from './RenderItemBtn.js'
import Render from './Render.js'

export default class FromItem {

    static add(selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[add-favorite]'
        let btn_array = document.querySelectorAll(defaultSelector)
        if (btn_array) {
            btn_array.forEach((el) => {
                el.addEventListener('click', () => {
                    let product = el.getAttribute('data-fav-id')
                    Change.add(product)
                    Favorite.updateFavorite()
                    RenderBtn.render(product)
                })
            })
        }
    }

    static remove() {
        let btn_remove = document.querySelectorAll('[product-remove]')
        if (btn_remove) {
            btn_remove.forEach((el) => {
                el.addEventListener('click', () => {
                    let product = el.getAttribute('data-fav-id')
                    let item = el.closest('[product-item]')
                    Change.remove(product)
                    Favorite.updateFavorite()
                    item.remove()
                    let items = document.querySelectorAll('[product-item]')
                    if (items.length == 0) {
                        Render.empty()
                    }
                })
            })
        }
    }
}