export default class Change {
    static add(product, price) {
        let storage = localStorage.getItem('basket')
        let cookie_basket = "basket="        
        let good_array
        if (storage) {
            good_array = JSON.parse(storage)
            let result = good_array.findIndex((obj => obj.id == product))
            if (result === -1) {
                good_array.push({id:product, count: "1", price: price})
            } else {
                good_array[result].count = String(parseInt(good_array[result].count) + 1)
            }
        } else {
            good_array = [{id: product, count: "1", price: price}]
        }
        localStorage.setItem('basket', JSON.stringify(good_array))
        let date = new Date
        date.setDate(date.getDate() + 30)
        document.cookie = cookie_basket + JSON.stringify(good_array) + ";path=/; expires=" + date.toUTCString()        
    }
    static remove(product, type = null) {
        let storage = localStorage.getItem('basket')
        let cookie_basket = "basket="
        let good_array
        if (storage) {
            good_array = JSON.parse(storage)
            let result = good_array.findIndex((obj => obj.id == product))
            if (result === -1) {
                return false
            } else {
                if (good_array[result].count > 1 && type === null) {
                    good_array[result].count = String(parseInt(good_array[result].count) - 1)
                } else {
                    good_array = good_array.filter(el => el.id != product)
                }
            }
        } else {
            return false
        }
        localStorage.setItem('basket', JSON.stringify(good_array))
        document.cookie = cookie_basket + JSON.stringify(good_array) + ";path=/;"
        
    }
    static clear() {
        let storage = localStorage.getItem('basket')
        let cookie_basket = "basket="
        if (storage) {
            localStorage.removeItem('basket') 
            document.cookie = cookie_basket + '=; Max-Age=0'
        } else {
            return false
        }  
    }
}