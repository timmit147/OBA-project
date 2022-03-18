// Import modules 
export function numbers(){

// Show animated years and lock to API year after 1.3 seconds
setTimeout(function () {
    document.querySelector(".year").style.fontSize = "4rem";
    document.querySelector(".year").classList.add("setNumber");
}, 1300);

}