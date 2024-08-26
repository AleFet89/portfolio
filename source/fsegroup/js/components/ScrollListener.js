export default class ScrollListener {
    
    static header(selector) {
        let element = document.querySelector(selector)
        if (window.scrollY > 100) {
            element.classList.add("scroll");
        } else {
            element.classList.remove("scroll");
        }
    }

    static onScroll(selector) {
        window.addEventListener('scroll', () => {
            let element = document.querySelector(selector)
            if (window.scrollY > 0) {
                element.classList.add("scroll");
            } else {
                element.classList.remove("scroll");
            }
        })
    }

}