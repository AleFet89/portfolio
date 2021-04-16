//  -------------Кроссбраузерность IE 9< -------------
let html5Tags = ['section', 'article', 'main', 'aside', 
                 'header', 'footer', 'nav', 'figure', 
                 'figcaption', 'address', 'canvas', 
                 'details', 'summary', 'audio', 'video',
                 'source', 'datalist', 'meter', 'progress',
                 'output', 'time', 'mark'];
for (let i = 0; i < html5Tags.length; i++) {
    document.createElement(html5Tags[i]);
}