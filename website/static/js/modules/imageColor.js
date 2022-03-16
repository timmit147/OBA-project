

export function getAverageRGB(imgEl) {

console.log(imgEl.src);
// getBase64FromImageUrl(document.getElementById('i').src);
// console.log(imgEl.src);

var blockSize = 5, // only visit every 5 pixels
    defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = {r:0,g:0,b:0},
    count = 0;
    
if (!context) {
    return defaultRGB;
}

height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

context.drawImage(imgEl, 0, 0);

try {
    data = context.getImageData(0, 0, width, height);
} catch(e) {
    // /* security error, img on diff domain */alert('x');
    return defaultRGB;
}

length = data.data.length;

while ( (i += blockSize * 4) < length ) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i+1];
    rgb.b += data.data[i+2];
}

// ~~ used to floor values
rgb.r = ~~(rgb.r/count);
rgb.g = ~~(rgb.g/count);
rgb.b = ~~(rgb.b/count);
console.log(rgb);
// document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
document.querySelector(":root").style.setProperty('--color1', 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
return rgb;

}