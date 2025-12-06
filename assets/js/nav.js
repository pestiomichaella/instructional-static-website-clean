const navBtnOpen = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu-wrapper");
const overlay = document.querySelector(".overlay");
const closeMenuBtn = document.querySelector(".close-menu-btn");

function closeMenu() {
    navMenu.classList.remove("open");
    overlay.classList.remove("open");
}

navBtnOpen.addEventListener('click', () => {
    navMenu.classList.add("open");
    overlay.classList.add("open");
});

overlay.addEventListener('click', closeMenu);

closeMenuBtn.addEventListener('click', closeMenu);