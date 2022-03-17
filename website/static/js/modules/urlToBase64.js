import {getAverageRGB} from './imageColor.js' 


export async function getBase64FromImageUrl() {
  const aaa = document.querySelector("#imageid").src;

  let text = "https://cors-anywhere.herokuapp.com/"+document.querySelector("#imageid").src;
let result = text.replace("&token=c1322402", "&token=c1322402");
  document.querySelector("#pizza").src = result;
  // console.log(document.querySelector("#pizza"));
  var img = document.querySelector("#pizza");
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    // console.log(dataURL);
    setTimeout(()=>{
      getAverageRGB(document.querySelector("#pizza"));    
  },1000);
  }
    
