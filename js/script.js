document.querySelector(".burger").addEventListener("click", menu = () => {
    let close = document.querySelector(".close");
    let links = document.querySelector(".nav-links");
    let ul = document.getElementsByTagName("ul");
    let burger = document.querySelector(".burger");

    if (links.style.display == "flex") {
        links.style.display = "none";
        burger.style.display = "flex";
        close.style.display = "none";
    } else {
        links.style.display = "flex";

        burger.style.display = "none";
        close.style.display = "flex";

    }
});

document.querySelector(".close").addEventListener("click", change = () => {
    let close = document.querySelector(".close");
    let links = document.querySelector(".nav-links");
    let ul = document.getElementsByTagName("ul");
    let burger = document.querySelector(".burger");

    if (close.style.display == "flex") {
        links.style.display = "none";
        close.style.display = "none";
        burger.style.display = "flex";

    } else {
        links.style.display = "flex";
        close.style.display = "flex";
        burger.style.display = "none";
    }
});