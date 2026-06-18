// Добавление названия сайта к копируемому тексту
// Dывод предупреждения при клике правой кнопкой мыши по изображению
export default class CopyProtect {
  static protect(option) {
    if (typeof option != 'object') return
    if (option.text === true) {
      document.oncopy = () => {
        let body = document.getElementsByTagName('body')[0]
        let selection = window.getSelection()
        let div = document.createElement('div')
        div.style.position = 'absolute'
        div.style.left = '-99999px'
        body.appendChild(div)
        div.innerHTML = selection + ' Источник ' + window.location.href
        selection.selectAllChildren(div)
        window.setTimeout(() => body.removeChild(div), 0)
      }
    }

    if (option.image === true) {
      document.oncontextmenu = (e) => {
        let errorMsg = "Изображения на сайте защищены авторским правом"
        let clickedEl = (e == null) ? e.srcElement.tagName : e.target.tagName;
        if (clickedEl == "IMG") {
          alert(errorMsg)
          return false
        }
      }
    }
  }
}