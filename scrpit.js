window.addEventListener("load", navShow);


function navShow() {
    console.log("navShow");

    document.querySelector(".burger_menu").addEventListener("click", burgerClick);
}


function burgerClick() {
    console.log("burgerClick");

    document.querySelector(".nav_links").classList.toggle("nav_active");
}
