export default class Change {
    static add(product) {
        let storage = localStorage.getItem('favorite')
        let cookie_favorite = "favorite="  
        let good_array
        if (storage) {
            good_array = JSON.parse(storage)
            let result = good_array.findIndex((obj => obj.id == product))
            if (result === -1) {
                good_array.push({id:product})
            } 
        } else {
            good_array = [{id: product}]
        }
        localStorage.setItem('favorite', JSON.stringify(good_array))
        let date = new Date
        date.setDate(date.getDate() + 30)
        document.cookie = cookie_favorite + JSON.stringify(good_array) + "; sameSite=Lax; path=/; expires=" + date.toUTCString() 
    }
    static remove(product) {
        let storage = localStorage.getItem('favorite')
        let cookie_favorite = "favorite=" 
        let good_array
        if (storage) {
            good_array = JSON.parse(storage)
            let result = good_array.findIndex((obj => obj.id == product))
            if (result === -1) {
                return false
            } else {               
                good_array = good_array.filter(el => el.id != product)               
            }
        } else {
            return false
        }
        localStorage.setItem('favorite', JSON.stringify(good_array))
        let date = new Date
        date.setDate(date.getDate() + 30)
        document.cookie = cookie_favorite + JSON.stringify(good_array) + "; sameSite=Lax; path=/; expires=" + date.toUTCString()
    }
    static clear() {
        let storage = localStorage.getItem('favorite')
        let cookie_favorite = "favorite=" 
        if (storage) {
            localStorage.removeItem('favorite') 
            document.cookie = cookie_favorite + '=; sameSite=Lax; path=/; Max-Age=0'
        } else {
            return false
        }  
    }
}