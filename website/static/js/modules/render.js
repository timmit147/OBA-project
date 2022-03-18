// Import modules 
import {getBase64FromImageUrl} from './urlToBase64.js' 
import {numbers} from './numbers.js' 
import {navigate} from './navigate.js' 

// Place API data in html file
export async function render(data, item) {
    const results = data.results;
    // If you got a place data in html
    if(results[item]){
      // If your book got a year start year animation and place new year in html
      if(results[item].year){
        document.querySelector(".year").innerHTML = results[item].year;
        numbers(results[item].year);
        document.querySelector(".year").style.fontSize = "0rem";
        document.querySelector(".year").classList.remove("setNumber");
      }
      // If you dont have a year show nothing
      else{
        document.querySelector(".year").innerHTML = "";
      }

      // If you have a image of the book show the book in html else do nothing
      if(results[item].coverimages[1]){
        document.querySelector("#imageid").src = results[item].coverimages[1];
      }

      // If you have a title place it in html
      if(results[item].titles[0]){
        document.querySelector("h1").innerHTML = '<span class="prev"></span>'+results[item].titles[0]+'<span class="next"></span>';
      }
      // If you dont have a title return geen titel
      else{
        document.querySelector("h1").innerHTML = '<span class="prev"></span>Geen Titel<span class="next"></span>';
      }

      // If you have a summarie place it in html
      if(results[item].summaries){
        document.querySelector(".content > p").innerHTML = results[item].summaries;
      }
      // Else return Geen samenvatting
      else{
        document.querySelector(".content > p").innerHTML = "Geen samenvating";
      }

      // If you have a link to the OBA page place it in the html
      if(results[item].detailLink){
        document.querySelector(".content > a").href = results[item].detailLink;
      }

      // Change book image to base64 so that you can get the image color
      getBase64FromImageUrl();

      // Add navigation logic
      navigate(data);
    }
}
