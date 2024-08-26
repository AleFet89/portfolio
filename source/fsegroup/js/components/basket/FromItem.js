import Change from "./Change.js"
import Basket from "./Basket.js"
import RenderBtn from './RenderItemBtn.js'

export default class FromItem {
    static move(picture, cart) {
        let picture_pos = picture.getBoundingClientRect()
	    let cart_pos = cart.getBoundingClientRect()
	    let picture_new = picture.cloneNode(true)
	    picture_new.style.position = "fixed"
	    picture_new.style.left = picture_pos['x'] + "px"
	    picture_new.style.top = picture_pos['y'] + "px"
	    picture_new.style.border = "none"
	    picture_new.style.borderRadius = "5px"
	    picture_new.style.zIndex = 100000
	    let start_x = picture_pos['x'] + 0.5 * picture_pos['width']
	    let start_y = picture_pos['y'] + 0.5 * picture_pos['height']
	    let delta_x = (cart_pos['x'] + 0.5 * cart_pos['width']) - start_x
	    let delta_y = (cart_pos['y'] + 0.5 * cart_pos['height']) - start_y
  
	    document.body.appendChild(picture_new) 
	    void picture_new.offsetWidth
	    picture_new.style.transform = `translateX(${delta_x}px)`
	    picture_new.style.transform += `translateY(${delta_y}px)`
	    picture_new.style.transform += "scale(0.25)"
	    picture_new.style.transition = "1s"
	    setTimeout(()=>document.body.removeChild(picture_new),960)
    }

    static add(selector = null) {
        let defaultSelector = (selector !== null) ? selector : '[add-basket]'
        let btn_array = document.querySelectorAll(defaultSelector)
        if (btn_array) {
            btn_array.forEach((el) => {
                el.addEventListener('click', () => {
                    let product = el.getAttribute('data-id')
                    let price = el.getAttribute('data-price')
                    let parent = el.closest('[product-item]')
                    let picture = null
                    if (parent) {
                        picture = parent.querySelector('[product-item-image]')
                    }
                    if (picture) {
                        this.move(picture, document.querySelector('[basket-move]'))
                    }
                    Change.add(product, price)
                    Basket.updateBasket()
                    RenderBtn.render(product, price)
                })
            })
        }
    }
}