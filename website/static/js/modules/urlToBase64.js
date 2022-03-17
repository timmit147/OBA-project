import {getAverageRGB} from './imageColor.js' 

export async function getBase64FromImageUrl(img) {
    img.setAttribute('crossOrigin', 'anonymous');
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    console.log(dataURL);
    getAverageRGB(document.querySelector("#imageid"));    
  }
    
