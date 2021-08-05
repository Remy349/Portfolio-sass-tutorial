const menuBtn = document.querySelector(".menu-btn"),
    hamburger = document.querySelector(".menu-btn__burger"),
    nav = document.querySelector(".nav"),
    menuNav = document.querySelector(".menu-nav"),
    navItem = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItem.forEach(item => item.classList.add("open"));

        showMenu = true;
    }
    else {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItem.forEach(item => item.classList.remove("open"));
        
        showMenu = false;
    }
}

menuBtn.addEventListener("click", toggleMenu);

