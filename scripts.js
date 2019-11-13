'use strict'

const request = new XMLHttpRequest();
request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=bqZhw2Xucvga70f1nckqt3LoreQVhsYhFmRnphS1', true);
request.onload = function () {
    const r = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        const imgURL = r.url;
        const image = document.createElement('img');
        image.setAttribute('class', 'image');
        image.setAttribute('src', imgURL);
        const root = document.getElementById('root');
        root.appendChild(image);
        const date = r.date;
        document.getElementById('date').innerHTML = date;
        const explanation = r.explanation;
        const explanationPara = document.createElement('p');
        explanationPara.innerHTML = explanation;
        root.appendChild(explanationPara);
    } else {
        console.log('An error occurred in API call');
    }
};

request.send();