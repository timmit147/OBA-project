// Import modules 
import {getAverageRGB} from './imageColor.js' 

// Source: https://stackoverflow.com/questions/22172604/convert-image-url-to-base64

// Change imageGetColor image to base64
export async function getBase64FromImageUrl() {
  // Make the image cors approved to make it base64
  let text = "https://cors-anywhere.herokuapp.com/"+document.querySelector("#imageid").src;
  let result = text.replace("&token=c1322402", "&token=c1322402");

  document.querySelector("#imageGetColor").src = result;
  var img = document.querySelector("#imageGetColor");
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");

  // Set time out to wait till the image is fully is converted to base64
  setTimeout(()=>{
    // Get color from base64 image
    getAverageRGB(document.querySelector("#imageGetColor"));    
  },1500);
  }
    
