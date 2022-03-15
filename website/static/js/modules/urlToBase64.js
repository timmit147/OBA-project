import {getAverageRGB} from './imageColor.js' 

export function getBase64FromImageUrl(url) {
    var img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        document.getElementById('i').src = dataURL;
    };

    img.src = url;



    document.body.addEventListener("click", function (evt) {
        var rgb = getAverageRGB(document.getElementById('i'));
    });
}