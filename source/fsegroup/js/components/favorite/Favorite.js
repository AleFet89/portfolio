import Fetch from '../form/Fetch.js'
import Update from './Update.js'
import FromItem from './FromItem.js'
import Render from './Render.js'
import RenderBtn from './RenderItemBtn.js'

export default class Favorite {
    static data() {
        let goodArray = JSON.parse(localStorage.getItem('favorite'))
        let goods = []
        if (goodArray) {
            goodArray.forEach((el)=> {
                goods.push({"id": el.id})
            })
            goods = JSON.stringify(goods)
        }
        return goods
    }

    static request() {
        const formData = new FormData()
        formData.append('modul', 'favorite')
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

    static updateFavorite() {
       Update.updateAll()
       RenderBtn.renderAll()
    }

    static startFavorite() {
        FromItem.add()
        FromItem.remove()
    }

}