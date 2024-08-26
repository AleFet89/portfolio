import CreateElement from '../CreateElement.js'
import Change from './Change.js'
import Favorite from './Favorite.js'
import RenderItemBtn from '../basket/RenderItemBtn.js'

export default class Render {

    static empty() {
        let selector = document.querySelector('#render')
        selector.innerHTML = ''
        let div = CreateElement.create('div', {class: 'empty-basket flex-fl_column-fl_center'})
        let h2 = CreateElement.create('h2', {content: 'Избранное пусто'})
        let p = CreateElement.create('p', {content: 'Вы еще ничего не добавили в избранное'})
        let a = CreateElement.create('a', {
            class: 'button-btn_main flex-fl_center', 
            html: '<span>Перейти в каталог</span>', 
            attribute: {'href': '/shop'} 
        })
        div.append(h2, p, a)
        selector.append(div)
    }

    static full() {
        return
    }
}