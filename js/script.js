//  -------------Кроссбраузерность IE 9< -------------
// var html5Tags = ['section', 'article', 'main', 'aside',
//                  'header', 'footer', 'nav', 'figure',
//                  'figcaption', 'address', 'canvas',
//                  'details', 'summary', 'audio', 'video',
//                  'source', 'datalist', 'meter', 'progress',
//                  'output', 'time', 'mark'];
// for (var i = 0; i < html5Tags.length; i++) {
//     document.createElement(html5Tags[i]);
// }

// Кнопка наверх
class UpButton {
  constructor() {
    this.goTop = document.querySelector("[data-button-up]");
    this.init();
  }

  trackScroll = () => {
    const scrolled = window.scrollY;
    const coords = document.documentElement.clientHeight;
    const scrollBottom =
      document.documentElement.scrollHeight -
      document.documentElement.scrollTop -
      document.documentElement.clientHeight;

    if (scrolled > coords) {
      this.goTop.classList.add("button-up-show");
    }
    if (scrolled < coords || scrollBottom < 20) {
      this.goTop.classList.remove("button-up-show");
    }
  };

  backToTop = () => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  init() {
    window.addEventListener("scroll", this.trackScroll);
    this.goTop.addEventListener("click", this.backToTop);
  }
}

new UpButton();