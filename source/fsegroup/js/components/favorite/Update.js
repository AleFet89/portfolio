import CreateElement from "../CreateElement.js"
import RenderBtn from './RenderItemBtn.js'

export default class Update {
    static type = 'good'

    static array() {
        let array = JSON.parse(localStorage.getItem('favorite'))
        return array
    }

    static count() {
        let array = this.array()
        let count = 0
        if (array && array.length != 0) {
            count = array.length
        }
        return count
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
        let defaultSelector = (selector !== null) ? selector : '[favorite-count]'
        let favCount = document.querySelectorAll(defaultSelector)
        let array = this.array()
        if (!favCount) return
        favCount.forEach((el) => {
            if (array && array.length != 0) {
                el.textContent = this.count()
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })
    }

    static updateText(selector = null) {
        let words = ['товаров', 'товар', 'товара']
        if (this.type == 'service') words = ['услуг', 'услуга', 'услуг']
        let defaultSelector = (selector !== null) ? selector : '[favorite-text]'
        let favText = document.querySelectorAll(defaultSelector)
        let array = this.array()
        if (!favText) return
        favText.forEach((el) => {
            if (array && array.length != 0) {
                el.innerHTML = '';
                let countWord = this.word(words, this.count())
                let content = '<span>В избранном ' + ' </span><span>' + countWord + ' </span>'
                let tag = CreateElement.create('a', {'html': content, 'attribute': {'href': '/favorite'} })
                el.append(tag) 
            } else {
                el.innerHTML = '<span>В избранном ничего нет</span>';
            }
        })
    } 

    static updateItemBtn() {
        RenderBtn.renderAll()
    }

    static updateAll() {
        this.updateCount()
        this.updateText()
        this.updateItemBtn()
    }

}