import {render} from './render.js' 

var item = 0;

export function navigate(data){
    window.addEventListener('click',function next(e){
        document.querySelector('main').innerHTML = "";
        item++;
        render(data, item);
        if(item % 2 != 0) {
            console.log("test");
        document.querySelector(".food").classList.toggle("food2");
        }
        window.removeEventListener("click",next);
    });
}
