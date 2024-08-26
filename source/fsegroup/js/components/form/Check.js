import Tooltip from './Tooltip.js'

export default class Check {
    static validation(el) {
        Tooltip.closeOnFocus()
        let checkbox = el.querySelector('[checkbox-input]')
        if (checkbox.checked) {
            return true
        } else {
            let err = el.querySelector('[checkbox-error]')
            err.classList.add('tooltip-visibile')
            err.parentElement.classList.add('form-error-border')
            return false
        }
    }
}