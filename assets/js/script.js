// Variables for mobile menu
const navbar = document.getElementById("navbar");
const dropdownMenu = document.getElementById("hamburger");
const closeMenuBtn = document.getElementById("menu-close");
const closeMenuLogo = document.getElementById("logo--close");
// Variables for feature tabs and content
const tabsContainer = document.querySelector('.features__tab-container');
const tabs = document.querySelectorAll('.features__tab');
const tabsContent = document.querySelectorAll('.feature__content');

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