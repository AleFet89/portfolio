// Сообщение об использовании файлов куки
export default class CookieInform {
  static getName(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
  static inform(option) {
    if (typeof option != 'object') return
    let cookieInform = this.getName(option.cookie)
    let selectorBlock = (option.open) ? option.open :'#cookie-notice'
    let selectorClose = (option.close) ? option.close : '#cookie-close'
    let cookieNotice = document.querySelector(selectorBlock)
    let cookieClose = document.querySelector(selectorClose)
    if (cookieInform != "no" && cookieNotice) {
      cookieNotice.style.display = "block"
      cookieClose.addEventListener("click", () => {
        cookieNotice.style.display = "none"
        let date = new Date
        date.setDate(date.getDate() + 1)
        document.cookie = option.cookie + "=no; sameSite=Lax; path=/; expires=" + date.toUTCString()
      })
    }
  }
}