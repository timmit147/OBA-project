// Import modules 
import {render} from './render.js' 

// Get data from OBA API
export function getData(){
  // Seperate url in different variables/
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const query = 'voeding';
  const key = 'ea8b95c5e9e28ff1f88c7c2dbef35f9a';
  const secret = '4289fec4e962a33118340c888699438d';
  const detail = 'Default';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  // Authorization with secret key
  const config = {
    Authorization: `Bearer ${secret}`
  };

  // Get data with url and secret key
  fetch(url, config)
    // If response is correct return json file from API
    .then(response => {
      return response.json();
    })
    // If response returns json file do this function
    .then(data => {
      // Place API data in html file
      render(data, 0);
      // Save API data in localStorage for backup data
      localStorage.setItem('data', JSON.stringify(data));
    })
    // If API call gives a error do this
    .catch(err => {
      // Return error in console
      console.log(err);
      // If you have localStorage use that data
      if(localStorage.getItem('data')){
        // Place localStorage data in html file
        render(JSON.parse(localStorage.getItem('data')), 0);
      }
      // If you not have localStorage use a saved json file
      else{
        // Get json file data from own server
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
                      // Place json data from own server in html file
                      render(allText, 0);
                  }
              }
          }
          rawFile.send(null);
      }
      // Start readTextFile funtion to read json file
      readTextFile("././data/nutrition.json");
      }
    });
}
  