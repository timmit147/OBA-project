// Import modules 
import {render} from './render.js' 

// Global variable to take track of witch book you or on
var item = 0;

// Navigate with left and right button through books
export function navigate(data){
    async function changeNavigate(){
        // Toggle on animations out
        document.querySelector(".food").classList.toggle("hideFrutit");
        document.querySelector(".content").classList.toggle("opacityImage");
        document.querySelector("article img").classList.toggle("opacityImage");
        // Wait 1 second before showing new book smooth
        setTimeout(function () {
            // Change background image when the item number is even
            if(item % 2 != 0) {
                document.querySelector(".food").classList.toggle("food2");
            }
        }, 1000);
        // Toggle on animations in
        setTimeout(function () {
            document.querySelector(".food").classList.toggle("hideFrutit");
            document.querySelector("article img").classList.toggle("opacityImage");
            document.querySelector(".content").classList.toggle("opacityImage");
            render(data, item);
        }, 1000); 
    }

    // If the book is number 1 hide previous button
    if(item < 1){
        document.querySelector('.prev').style.display = "none";
    }

    // If you are on the last book hide next button
    if(data.results.length < item + 2){
        document.querySelector('.next').style.display = "none";
    }

    // Add click funtion to next button and go to next book when clicked
    document.querySelector('.next').addEventListener('click',function next(e){
        item++;
        changeNavigate();
        window.removeEventListener("click",next);
        // Remove addEventListener when this function is called
    });

    // Add click funtion to previous button and go to previous book when clicked
    document.querySelector('.prev').addEventListener('click',function prev(e){
        item = item - 1;
        changeNavigate();
        // Remove addEventListener when this function is called
        window.removeEventListener("click",prev);
    });
}
