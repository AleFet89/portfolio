 // Поиск элемента
export default class SearchItem {
	constructor(selector, item) {
		this.selector = selector
		this.item = item
	}
	search() {
		let input = document.querySelector(this.selector)
		if (input === undefined || input === null) return
		input.addEventListener('input', () => {
			let item_search = input.value.charAt(0).toUpperCase() + input.value.slice(1)
			let item_array = document.querySelectorAll(this.item)
			if (item_array && item_search.length >= 3) {
				item_array.forEach((el) => {
				  if (el.textContent != item_search) {
					   if (el.textContent.indexOf(item_search) === -1) el.classList.add('item-hidden') 
				  }
				})
		  	} else if (item_search.length === 0) {
				item_array.forEach(el => el.classList.remove('item-hidden'))
		  	}
		})
	}
}