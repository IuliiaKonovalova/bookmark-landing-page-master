const navbar = document.getElementById("navbar");
const dropdownMenu = document.getElementById("hamburger");
const closeMenuBtn = document.getElementById("menu-close");
const closeMenuLogo = document.getElementById("logo--close");

dropdownMenu.addEventListener("click", function (e) {
  showMenu(e);
});

closeMenuBtn.addEventListener("click", function (e) {
  closeMenu(e);
});

closeMenuLogo.addEventListener("click", function (e) {
  closeMenu(e);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMenu(e);
  }
})
const showMenu = function (e) {
  e.preventDefault();
  navbar.classList.add("mobile");
}

const closeMenu = function (e) {
  e.preventDefault();
  navbar.classList.remove("mobile");
}