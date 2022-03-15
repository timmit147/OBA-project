/*** Fetching data -> refactor into module later ***/
const main = document.querySelector('main');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'tolkien';
const key = '1e19898c87464e239192c8bfe422f280';
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
    render(data);
    localStorage.setItem('data', JSON.stringify(data));
  })
  .catch(err => {
        // console.log(err);
    if(localStorage.getItem('data')){
      render(JSON.parse(localStorage.getItem('data')));
    }


    
  });
  

// render data
function render(data) {
  const results = data.results;
  // console.dir(results);
  // console.log(data.results[0].titles[0]);
  const html = `
            <article>
            <img  crossorigin="" src="${
              data.results[0].coverimages ? data.results[0].coverimages[1] : 'Geen samenvatting'
            }">
              <h1>${data.results[0].titles[0]}</h1>
              <p>${data.results[0].summaries ? data.results[0].summaries[0] : 'Geen samenvatting'}</p>
            </article>
          `;
    main.insertAdjacentHTML('beforeend', html);
   
    function getBase64FromImageUrl(url) {
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
    }
    getBase64FromImageUrl(document.getElementById('i').src);

    
    document.body.addEventListener("click", function (evt) {
      alert("body clicked");
      var rgb = getAverageRGB(document.getElementById('i'));
  });

    async function getAverageRGB(imgEl) {

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
        document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
    return rgb;
    
}








  // results.forEach((item, i) => {
  //   const html = `
  //           <article>
  //             <h1>${item.titles[0]}</h1>
  //             <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
  //             <img src="${
  //               item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
  //             }">
  //           </article>
  //         `;
  //   main.insertAdjacentHTML('beforeend', html);
  // });
}


