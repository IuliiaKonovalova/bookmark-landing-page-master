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

tabsContainer.addEventListener('click', function (e) {
  changeTabContent(e);

});

const changeTabContent = function (e) {
  const clicked = e.target.closest('.features__tab');
  console.log(clicked);
  if (!clicked) return;

  // Remove Active Class

  tabs.forEach((t) => t.classList.remove('features__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('feature__content--active'));

  // Activate Tab

  clicked.classList.add('features__tab--active');

  // Activate Content

  document
    .querySelector(`.feature__content--${clicked.dataset.tab}`)
    .classList.add('feature__content--active');
}