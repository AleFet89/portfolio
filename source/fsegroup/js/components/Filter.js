export default class Filter { 
  start(selector) {
        const form = document.querySelector(selector)
        if (!form) return
        form.addEventListener('change', () => {

            const minPrice = form.querySelector('[name="rangeMin"]'),
            maxPrice = form.querySelector('[name="rangeMax"]'), 
            available = form.querySelector('[name="available"]'),
            checkboxes = form.querySelectorAll('[name*="brand-"]:checked')
            let brand = Array.from(checkboxes).map(checkboxes => checkboxes.value)
            const data = {
                minPrice: minPrice.value,
                maxPrice: maxPrice.value,       
                available: available.checked,
                brand: brand
            };
    
            let cookie_filter = "filter="
            let filter_array = [data]
            localStorage.setItem('filter', JSON.stringify(filter_array))
            let date = new Date
            date.setDate(date.getDate() + 1)
            document.cookie = cookie_filter + JSON.stringify(filter_array) + "; sameSite=Lax; path=/; expires=" + date.toUTCString() 
    
            // setTimeout(() =>  window.location.reload(), 500)  
        })
        const button = document.querySelector('[reset-filter]')
        button.addEventListener('click', () => { 
            localStorage.removeItem('filter')
            document.cookie = 'filter=; Max-Age=0'
            //setTimeout(() =>  window.location.reload(), 500) 
        })
    }
}