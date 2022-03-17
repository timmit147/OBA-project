import {render} from './render.js' 

export function getData(){
/*** Fetching data -> refactor into module later ***/
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'voeding';
const key = 'ea8b95c5e9e28ff1f88c7c2dbef35f9a';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data, 0);
    localStorage.setItem('data', JSON.stringify(data));
  })
  .catch(err => {
    console.log(err);
    // if(localStorage.getItem('data')){
    //   render(JSON.parse(localStorage.getItem('data')), 0);
    // }
    // else{
      async function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    allText = JSON.parse(allText);
                    console.log(allText);
                    render(allText, 0);
                }
            }
        }
        rawFile.send(null);
    }
   readTextFile("././data/nutrition.json");
    // }
  });
}
  