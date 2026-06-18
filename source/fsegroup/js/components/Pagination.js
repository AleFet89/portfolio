import Fetch from './form/Fetch.js'
import CreateElement from './CreateElement.js'
import Basket from './basket/Basket.js'

export default class Pagination {
  static render(content) {
    let selector = document.querySelector('#render-product')
    content.forEach((el) => {
      let item = CreateElement.create('div', {class: 'product-item flex-fl_column', attribute: {'product-item': ''} })
      let p = CreateElement.create('p', {class: 'product-item-id', content: '№ ' + el.uiq })
      let div = CreateElement.create('div', {class: 'flex product-item-mobile'})

      let content = CreateElement.create('div', {class: 'flex-fl_column-fl_65'})
      let text = CreateElement.create('div', {class: 'product-item-text flex-fl_column'})
      let nameEl
      if (el.url) {
          nameEl = CreateElement.create('a', {html: '<h3>' + el.name + '</h3>', attribute: {'href': '/' + el.url} })
      } else {
          nameEl = CreateElement.create('h3', { content: el.name })
      }
      let desc = CreateElement.create('div', {class: 'product-item-desc', content: el.desc})
      let attr_content = '<svg><use href="/img/sprite.svg#calendar"></use></svg><p>' + el.attr + '</p>'
      let attr = CreateElement.create('div', {class: 'product-item-attr flex-fl_cross-cnt', html: attr_content})
      text.append(nameEl, desc, attr)
      content.append(text)

      let price_content = '<p>' + new Intl.NumberFormat("ru").format(el.price) + ' ₽</p>'
      let price = CreateElement.create('div', {class: 'product-item-price flex-fl_20-fl_main-end', html: price_content})
      
      let btn = CreateElement.create('div', {class: 'product-item-btn flex-fl_column-fl_15'})
      let message = CreateElement.create('p', {
        class: 'button-btn_small product-item-message', 
        attribute: { 'item-message': '', 'data-id': el.id }
      })
      let add = CreateElement.create('button', {
        class: 'button-btn_gradient-btn_small', 
        html: '<span>В корзину</span>',
        attribute: { 'add-basket': '', 'data-id': el.id, 'data-price': el.price}
      })
      let order = CreateElement.create('a', {
        class: 'button-btn_primary-btn_small-btn_outline', 
        content: 'Заказать',
        attribute: { 'href': '/order?product=' + el.id }
      })
      btn.append(message, add, order)

      div.append(content, price, btn)
      item.append(p, div)
      selector.append(item)
    })
  }

  static start() {
    let button = document.querySelector('[pagination]')
    if (!button) return
    button.addEventListener('click', () => {
      const formData = new FormData()
      formData.append('modul', 'pagination')
      Fetch.request(formData)
        .then((response) => {
            let resp = JSON.parse(response)
            if (resp.type == 'none') {
              button.textContent = resp.error
              setTimeout(() => button.textContent = 'Показать еще', 3000)	
            } else if (resp.type == 'yes') {
              this.render(resp.content) 
              Basket.startBasket()
            } else if (resp.type == 'finish') {
              this.render(resp.content)
              Basket.startBasket() 
              button.remove()
            } else if (resp.type == 'empty') {
              button.remove()
            }
        })
        .catch((err) => {
          console.log(err)
          button.textContent = 'Ничего не найдено'
          setTimeout(() => button.textContent = 'Показать еще', 3000)	
        })



    })
  }
}