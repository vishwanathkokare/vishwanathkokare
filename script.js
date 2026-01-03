/* start of navbar menu open close feature */
const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".navbar-menu");
const menuCloseBtn = document.querySelector(".navbar-close button");
const openMenuLinks = document.querySelectorAll(".mobile-nav-links li a");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
});

menuCloseBtn.addEventListener("click", () => {
  menu.style.display = "none";
});

// when click on link then navigate to page on close menu page
openMenuLinks.forEach((openMenuLink) => {
  openMenuLink.addEventListener("click", () => {
    menu.style.display = "none";
  });
});
/* end of navbar menu open close feature */