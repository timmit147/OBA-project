import {getBase64FromImageUrl} from './urlToBase64.js' 

export function render(data) {
    const results = data.results;
    // console.dir(results);
    console.log(data.results[0]);
    const html = `
              <article>
              <img src="${
                data.results[0].coverimages[1]}">
                <h1>${data.results[0].titles[0]}</h1>
                <p>${data.results[0].summaries}</p>
                <p>${data.results[0].year}</p>
              </article>
            `;
    const main = document.querySelector('main');
    main.insertAdjacentHTML('beforeend', html);
    getBase64FromImageUrl(document.getElementById('i').src);
}
