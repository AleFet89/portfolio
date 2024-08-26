import CookieInform from './components/CookieInform.js'
import CopyProtect from './components/CopyProtect.js'
import ScrollListener from './components/ScrollListener.js'
import Background from './components/Background.js'
import OpenElement from './components/OpenElement.js' 
import SearchItem from './components/SearchItem.js' 
import Form from './components/form/Form.js'
import Popup from './components/Popup.js'
//import Logout from './components/Logout.js'
//import ConfirmMail from './components/ConfirmMail.js'
import Basket from './components/basket/Basket.js'
import Favorite from './components/favorite/Favorite.js'
import HideShow from './components/HideShow.js'
import OnInput from './components/OnInput.js'
import Slider from './components/Slider.js'
import PriceSliderRange from './components/PriceSliderRange.js'
import Sidebar from './components/Sidebar.js'
import Filter from './components/Filter.js'
import OnChange from './components/OnChange.js'

CookieInform.inform({cookie: 'cookieinform'})
CopyProtect.protect({text: false, image: false})
ScrollListener.onScroll('[scroll-header]')

let popup = new Popup()
popup.open()

let openElement = new OpenElement('[element]');
openElement.open('element-show', 'click-button')
let openElementSearch = new OpenElement('[element-search]');
openElementSearch.open('element-search-show', 'click-button-search')
let openCatalog = new OpenElement('[element-sidebar]')
openCatalog.open('sidebar-show', 'click-sidebar')
let openFilter = new OpenElement('[element-filter]')
openFilter.open('filter-show', 'click-filter')
let openFilterPrice = new OpenElement('[element-filter-price]')
openFilterPrice.open('filter-show-price', 'click-filter-price')
let openFilterBrand = new OpenElement('[element-filter-brand]')
openFilterBrand.open('filter-show-brand', 'click-filter-brand')

let hideShowTabs = new HideShow()
hideShowTabs.open('[tabs-button]', '[tabs-content]')
hideShowTabs.open('[attr-tabs-button]', '[attr-tabs-content]')
hideShowTabs.open('[good-tabs-button]', '[good-tabs-content]')
hideShowTabs.open('[catalog-tabs-button]', '[catalog-tabs-content]')
let citySearch = new SearchItem('[city-input]', '[city-item]')
citySearch.search()
let searchInput = new OnInput()
searchInput.start('[search-on-input]', '.search-product')

let filter = new Filter();
filter.start('[filter]')

VMasker(document.querySelectorAll("[phone-mask]")).maskPattern("9 (999) 999-9999")

Form.send(popup)
Form.lk(popup)
//Logout.exit(popup)

Basket.startBasket()
Favorite.startFavorite()
Sidebar.start()

Slider.startWatched()
Slider.startAttributes()
PriceSliderRange.start()
OnChange.addFile()
// Pagination.start()

window.onload = () => {
    Background.render()
    Background.renderImg()
    Background.renderImgTag()
    ScrollListener.header('[scroll-header]')
    Basket.updateBasket()
    Favorite.updateFavorite()
    let hideShowTabs = new HideShow()
    hideShowTabs.open('[tabs-button]', '[tabs-content]')
    hideShowTabs.open('[attr-tabs-button]', '[attr-tabs-content]')
    hideShowTabs.open('[good-tabs-button]', '[good-tabs-content]')
} 
window.onresize = () => { 
	Background.render()
    Background.renderImg()
    Background.renderImgTag()
}

let width = window.screen.width
if (width < 480) {
    hideShowTabs.destroy('[attr-tabs-button]', '[attr-tabs-content]')
}

//mobile dropdown catalog
const prevCategoryBtns = document.querySelectorAll('[prev-category-btn]')
const nextCategoryBtns = document.querySelectorAll('[next-category-btn]')
prevCategoryBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        let prevCategoryContent = btn.closest('[prev]')
        prevCategoryContent.classList.remove('next-category')
    })
})
nextCategoryBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        let nextCategoryContent = btn.nextElementSibling
        nextCategoryContent.classList.add('next-category')
    })
})