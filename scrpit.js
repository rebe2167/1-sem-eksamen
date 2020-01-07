window.addEventListener("load", sidenVises);

//burger menu//

function sidenVises() {
    console.log("sidenVises");

    document.querySelector(".burger_menu").addEventListener("click", burgerClick);
    document.querySelector(".forside_logo").addEventListener("mouseover", mouseOverForside);
}


function burgerClick() {
    console.log("burgerClick");

    document.querySelector(".nav_links").classList.toggle("nav_active");
}

//burger menu slut//

function mouseOverForside() {
    console.log("mouseOverForside");

    document.querySelector(".splash_pic").classList.add("mouse_zoom");
    document.querySelector(".forside_logo").addEventListener("mouseout", mouseOutForside);
}

function mouseOutForside() {
    console.log("mouseOutForside");

    document.querySelector(".forside_logo").removeEventListener("mouseout", mouseOutForside);

    document.querySelector(".splash_pic").classList.remove("mouse_zoom");

}
