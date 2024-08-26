export default class Tooltip {
    static close() {
        let tool = document.querySelectorAll('.tooltip-visibile')
        tool.forEach((el) => el.classList.remove('tooltip-visibile'))
    }
    static closeOnFocus() {
        let tool = document.querySelectorAll('[tool-focus]')
        tool.forEach((el) => {
          el.addEventListener('focus', () => {
             if (el.nextElementSibling.classList.contains('tooltip-visibile')) {
                el.nextElementSibling.classList.remove('tooltip-visibile')
             }
             if (el.classList.contains('form-error-border')) {
              el.classList.remove('form-error-border')
            }
            if (el.parentElement.classList.contains('form-error-border')) {
                el.parentElement.classList.remove('form-error-border')
              }
          })
        })
    }
}