// слайдер цены с двумя ползунками
export default class PriceSliderRange {
    static start() {
        const priceInputs = document.querySelectorAll('[price-input]')
        const rangeInputs = document.querySelectorAll('[range-input]')
        const progress = document.querySelector('[slider-progress]')
        const maxPriceValue = document.querySelector('[max-price]')
        let priceGap = 0
        if (!maxPriceValue) return
        let maxPrice = Number(maxPriceValue.textContent)       

        priceInputs.forEach(input => {
            input.addEventListener("input", event => {
                let minVal = parseInt(priceInputs[0].value)
                let maxVal = parseInt(priceInputs[1].value)

                if ((maxVal - minVal >= priceGap) && (maxVal <= maxPrice)) {
                    if (event.target.className === 'min-price') {
                        rangeInputs[0].value = minVal
                        progress.style.left = (minVal / rangeInputs[0].max) * 100 + '%'
                    } else {
                        rangeInputs[1].value = maxVal
                        progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + '%'
                    }
                
                } 
            })
        })

        rangeInputs.forEach(input => {
            input.addEventListener("input", event => {
                let minVal = parseInt(rangeInputs[0].value)
                let maxVal = parseInt(rangeInputs[1].value)

                if (maxVal - minVal < priceGap) {
                    if (event.target.className === 'min-range') {
                        rangeInputs[0].value = maxVal - priceGap
                    } else {
                        rangeInputs[1].value = minVal + priceGap
                    }
                
                } else {
                    priceInputs[0].value = minVal
                    priceInputs[1].value = maxVal
                    progress.style.left = (minVal / rangeInputs[0].max) * 100 + '%'
                    progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + '%'
                }
            })
        })
    }
}