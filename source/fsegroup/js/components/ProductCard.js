import RenderItemBtn from "./basket/RenderItemBtn.js"
import RenderItemFav from "./favorite/RenderItemBtn.js"

export default class ProductCard {
    static start() {
        let product = document.querySelectorAll('[item-new]')
        let productDesc = document.querySelector('[product-desc]')
        let productPrice = document.querySelector('[product-price]')
        let btnBasket = document.querySelector('[item-button]')
        let btnFavorite = document.querySelector('[fav-button]')
        let productImage = document.querySelector('[product-item-image]')
        if (!product) return false
        product.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                let item = document.querySelectorAll('.stone-active')
                if (item) {
                    item.forEach(p => {p.classList.remove('stone-active')})
                }
                el.classList.add('stone-active')
                productDesc.innerHTML = ""
                productPrice.innerHTML = ""
                productImage.innerHTML = ""
                productDesc.textContent = el.getAttribute('stone-desc')
                productPrice.textContent = el.getAttribute('stone-price') + ' ₽'
                btnBasket.setAttribute('data-id', el.getAttribute('stone-id'))
                btnBasket.setAttribute('data-price', el.getAttribute('stone-price'))
                btnFavorite.setAttribute('data-fav-id', el.getAttribute('stone-id'))
                let elImage = el.querySelector('picture')
                productImage.append(elImage.cloneNode(true))
                RenderItemBtn.render(el.getAttribute('stone-id'), el.getAttribute('stone-price'))
                RenderItemFav.render(el.getAttribute('stone-id'))
            })
        })
    }
}