import Fetch from './form/Fetch.js'
import CreateElement from './CreateElement.js'

export default class OnInput {
    close(input, parent) {
        let input_array = document.querySelectorAll(input)
        if (!input_array) return
        input_array.forEach((el) => {
                if (el.classList.contains('on-input')) el.classList.remove('on-input')
                if (el.closest(parent).classList.contains('on-input')) el.closest(parent).classList.remove('on-input')
                if (el.classList.contains('live-search')) el.classList.remove('live-search')
                if (el.closest(parent).classList.contains('live-search')) el.closest(parent).classList.remove('live-search')
        })
    }

    start(input, parent) {
        let input_array = document.querySelectorAll(input)
        if (!input_array) return
        input_array.forEach((el) => {
            let search_input = el.querySelector('.search-input')          
            el.addEventListener('click', () => {
                this.close(input, parent)
                el.classList.add('on-input')
                el.closest(parent).classList.add('on-input')
                           
            })
            el.addEventListener('input', (event) => {                              
                if (event.target.value.length >= 4) { 
                    el.classList.add('live-search')
                    el.closest(parent).classList.add('live-search') 
                    this.renderLiveSearchResult(el)                      
                } else {
                    el.classList.remove('live-search')
                    el.closest(parent).classList.remove('live-search') 
                }        
            })
            document.addEventListener('click', (event) => {
                let target = event.target;
                let its_input = target == el || el.contains(target);
                let input_is_active = el.classList.contains('on-input');
                
                if (!its_input && input_is_active) {
                    this.close(input, parent)
                    search_input.value = '';                    
                }
            });
        })        
    }

    renderLiveSearchResult(form) {         
        const result_wrapper = document.querySelectorAll('[render-live-search]') 
        const formData = new FormData(form)
        formData.append('modul', 'search')
        Fetch.request(formData)
        .then((response) => {
            let resp = JSON.parse(response)
            if (resp.type == 'none') {               	
                result_wrapper.forEach((wrapper) => {
                    wrapper.innerHTML = 'Ничего не найдено'
                })
            } else if (resp.type == 'yes') {                
                result_wrapper.forEach((wrapper) => {
                    wrapper.innerHTML = ''               
                    resp.content.forEach((el) => {
                        let a = CreateElement.create('a', {attribute: {'href': '/' + el.url}, content: el.name })
                        let li = CreateElement.create('li') 
                        li.append(a)    
                        wrapper.append(li)
                    })
                })
            } 
        })
        .catch((err) => {
          console.log(err)	
        })
    }
}