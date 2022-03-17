import {getBase64FromImageUrl} from './urlToBase64.js' 
import {numbers} from './numbers.js' 
import {navigate} from './navigate.js' 

export  function render(data, item) {
  if( data.results[item]){
    const results = data.results;
    const html = `
              <article>
              <div class="food"></div>
              <img src="${
                data.results[item].coverimages[1]}">
                <div class="content">
                <h1><span class="prev"></span>${data.results[item].titles[0]}<span class="next"></span></h1>
                <p>${data.results[item].summaries}</p>
                </div>
                <p class="year">${data.results[item].year}</p>
                <img id="i"  src="https://media.istockphoto.com/photos/feline-picture-id108226626?k=20&m=108226626&s=612x612&w=0&h=bDaWwxhcygjerdR71qQu8YFSXaDUIi_HUZV2AADg5L8=" />
              </article>
            `;
    const main = document.querySelector('main');
    main.insertAdjacentHTML('beforeend', html);
    getBase64FromImageUrl(document.getElementById('i').src);
    numbers(data.results[item].year);
    navigate(data);
      }
}
