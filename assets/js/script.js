// Variables for mobile menu
const navbar = document.getElementById("navbar");
const dropdownMenu = document.getElementById("hamburger");
const closeMenuBtn = document.getElementById("menu-close");
const closeMenuLogo = document.getElementById("logo--close");
// Variables for feature tabs and content
const tabsContainer = document.querySelector(".features__tab-container");
const tabs = document.querySelectorAll(".features__tab");
const tabsContent = document.querySelectorAll(".feature__content");
// Variables for questions
const questions = document.querySelectorAll(".question");
const answerHolders = document.querySelectorAll(".question__holder");


document.addEventListener("DOMContentLoaded", function () {

  dropdownMenu.addEventListener("click", function (e) {
    showMenu(e);
  });

  closeMenuBtn.addEventListener("click", function (e) {
    closeMenu(e);
  });

  closeMenuLogo.addEventListener("click", function (e) {
    closeMenu(e);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu(e);
    }
  })

  tabsContainer.addEventListener("click", function (e) {
    changeTabContent(e);
  });

  questions.forEach((question) => {
    question.addEventListener("click", showHideAnswer)
  });

})

const showMenu = function (e) {
  e.preventDefault();
  navbar.classList.add("mobile");
}

const closeMenu = function (e) {
  e.preventDefault();
  navbar.classList.remove("mobile");
}

const changeTabContent = function (e) {
  const clicked = e.target.closest(".features__tab");
  if (!clicked) return;

  // Remove Active Class
  tabs.forEach((t) => t.classList.remove("features__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("feature__content--active"));

  // Activate Tab
  clicked.classList.add("features__tab--active");

  // Activate Content
  document
    .querySelector(`.feature__content--${clicked.dataset.tab}`)
    .classList.add("feature__content--active");
}

const showHideAnswer = function (e) {
  const clicked = e.target.closest(".question__holder");
  // e.target.classList.toggle("show")
  if (!clicked) return;
  clicked.classList.toggle("show")
  console.log("hi")
}