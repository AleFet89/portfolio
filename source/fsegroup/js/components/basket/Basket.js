import Fetch from '../form/Fetch.js'
import Update from './Update.js'
import FromItem from './FromItem.js'
import Render from './Render.js'
import RenderBtn from './RenderItemBtn.js'

export default class Basket {
    static data() {
        let goodArray = JSON.parse(localStorage.getItem('basket'))
        let goods = []
        if (goodArray) {
            goodArray.forEach((el)=> {
                goods.push({"id": el.id, "count": el.count})
            })
            goods = JSON.stringify(goods)
        }
        return goods
    }

    static request() {
        const formData = new FormData()
        formData.append('modul', 'basket')
        formData.append('goods', this.data())
        Fetch.request(formData)
        .then((response) => {
            let resp = JSON.parse(response)
            if (resp.type == 'none') {
                Render.empty()
            } else if (resp.type == 'yes') {
                Render.full(resp.content) 
            }
        })
        .catch((err) => {
            Render.empty()
        })
    }

    static updateBasket() {
       Update.updateAll()
       RenderBtn.renderAll()
    }

    static startBasket() {
        FromItem.add()
        Render.item()
    }

}