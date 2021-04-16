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

//  -------------hover на h3 -------------
let portfolioTitles = document.querySelectorAll('h3');

for (let i = 0; i < portfolioTitles.length; i++) {
	portfolioTitles[i].addEventListener('mouseover', function () {
		portfolioTitles[i].classList.toggle('colored');
	});
	portfolioTitles[i].addEventListener('mouseout', function () {
		portfolioTitles[i].classList.toggle('colored');
	});
}