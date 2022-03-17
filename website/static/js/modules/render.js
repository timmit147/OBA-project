import {getBase64FromImageUrl} from './urlToBase64.js' 
import {numbers} from './numbers.js' 
import {navigate} from './navigate.js' 

export async function render(data, item) {
    const results = data.results;
    if( results[item]){
      if(results[item].year){
        document.querySelector(".year").innerHTML = results[item].year;
        numbers(results[item].year);
        document.querySelector(".year").style.fontSize = "0rem";
        document.querySelector(".year").classList.remove("setNumber");
      }
      else{
        document.querySelector(".year").innerHTML = "";
      }

      if(results[item].coverimages[1]){
        document.querySelector("#imageid").src = results[item].coverimages[1];
      }
      if(results[item].titles[0]){
        document.querySelector("h1").innerHTML = '<span class="prev"></span>'+results[item].titles[0]+'<span class="next"></span>';
      }
      else{
        document.querySelector("h1").innerHTML = '<span class="prev"></span>Geen Titel<span class="next"></span>';
      }
      if(results[item].summaries){
        document.querySelector(".content > p").innerHTML = results[item].summaries;
      }
      else{
        document.querySelector(".content > p").innerHTML = "Geen samenvating";
      }
      if(results[item].detailLink){
        document.querySelector(".content > a").href = results[item].detailLink;
      }

        getBase64FromImageUrl();


      navigate(data);
    }
}
