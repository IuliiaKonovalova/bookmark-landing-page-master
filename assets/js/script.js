const navbar = document.getElementById("navbar");
const dropdownMenu = document.getElementById("hamburger");
const closeMenuBtn = document.getElementById("menu-close");

dropdownMenu.addEventListener("click", function (e) {
  showMenu(e);
});

closeMenuBtn.addEventListener("click", function (e) {
  closeMenu(e);
});

const showMenu = function (e) {
  e.preventDefault();
  navbar.classList.add("mobile");
}

const closeMenu = function (e) {
  e.preventDefault();
  navbar.classList.remove("mobile");
}