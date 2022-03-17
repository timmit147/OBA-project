import {render} from './render.js' 

var item = 0;

export function navigate(data){
    function changeNavigate(){
        document.querySelector('main').innerHTML = "";
        render(data, item);
        if(item % 2 != 0) {
        document.querySelector(".food").classList.toggle("food2");
        }
    }
    if(item < 1){
        document.querySelector('.prev').style.display = "none";
    }
    document.querySelector('.next').addEventListener('click',function next(e){
        item++;
        changeNavigate();
        window.removeEventListener("click",next);
    });
    document.querySelector('.prev').addEventListener('click',function prev(e){
        item = item - 1;
        changeNavigate();
        window.removeEventListener("click",prev);
    });
}
