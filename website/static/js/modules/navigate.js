import {render} from './render.js' 

var item = 0;

export function navigate(data){
    async function changeNavigate(){
        document.querySelector(".food").classList.toggle("hideFrutit");
        document.querySelector(".content").classList.toggle("opacityImage");
        document.querySelector("article img").classList.toggle("opacityImage");
        setTimeout(function () {
            if(item % 2 != 0) {
                document.querySelector(".food").classList.toggle("food2");
                }
        }, 1000);
        setTimeout(function () {
            document.querySelector(".food").classList.toggle("hideFrutit");
            document.querySelector("article img").classList.toggle("opacityImage");
            document.querySelector(".content").classList.toggle("opacityImage");
            render(data, item);
        }, 1000);
        

    }
    if(item < 1){
        document.querySelector('.prev').style.display = "none";
    }
    if(data.results.length < item + 2){
        document.querySelector('.next').style.display = "none";
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
