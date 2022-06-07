import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
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
// Variables for form
const submissionForm = document.getElementById("form");
const emailInput = document.getElementById("email");
// Scroll timeline variables
const scrollTracker = document.getElementById("scroll-tracker");
const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});
const scrollToTop = document.getElementById("scroll-to-top-button");
const scrollToTopTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(10)],
});
const cards = document.querySelectorAll(".feature__image--photo");

/**
 * Main function
 */
document.addEventListener("DOMContentLoaded", function () {
  // Scroll to top timeline
  scrollToTop.animate({
    transform: ['scale(0)', 'scale(1)'],
    opacity: 1,
  }, {
    duration: 1,
    timeline: scrollToTopTimeline,
  })
  // Scroll page timeline
  scrollTracker.animate({
    transform: ['scaleX(0)', 'scaleX(1)'],
  }, {
    duration: 1,
    timeline: scrollTrackingTimeline,
  });
  // Scroll feature images timeline
  cards.forEach((card) => {
    const imagesOffsetTop = card.offsetTop;
    const imagesHeight = card.offsetHeight;
    console.log(imagesOffsetTop);
    console.log(imagesHeight);
    card.animate({
      transform: ["perspective(1000px) rotateX(50deg)", "perspective(1000px) rotate(0)"],
      opacity: ["0.8", "1"],
    }, {
      duration: 1,
      easing: "linear",
      timeline: new ScrollTimeline({
        // scrollOffsets: [{
        //     target: card,
        //     edge: "end",
        //     threshold: "0.2"
        //   },
        //   {
        //     target: card,
        //     edge: "start",
        //     threshold: "1"
        //   },
        // ]
        scrollOffsets: [
          CSS.px(imagesOffsetTop + imagesHeight - window.innerHeight + 800),
          CSS.px(imagesOffsetTop + 1200),
        ],
      })
    });
  });

  // Control mobile menu
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
  });

  // Control Feature's section content
  tabsContainer.addEventListener("click", function (e) {
    changeTabContent(e);
  });

  // Control Question/Answer functionality
  questions.forEach((question) => {
    question.addEventListener("click", showHideAnswer);
  });

  submissionForm.addEventListener('submit', function (e) {
    submission(e);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      submission(e);
    }
  });
});


/**
 * Show mobile menu
 */
const showMenu = function (e) {
  e.preventDefault();
  navbar.classList.add("mobile");
};

/**
 * Hide mobile menu
 */
const closeMenu = function (e) {
  e.preventDefault();
  navbar.classList.remove("mobile");
};

/**
 * Switch content on tag click
 */
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
};


/**
 * Show / Hide answer for the questions
 */
const showHideAnswer = function (e) {
  const clicked = e.target.closest(".question__holder");
  if (!clicked) return;
  clicked.classList.toggle("show");
};


/**
 * Check if the email is valid.
 * If it is valid it displays a thank you message.
 * If it is nat valid, displays an error message.
 */
const submission = function (e) {
  e.preventDefault();
  const email = emailInput.value;
  if (!validateEmail(email)) {
    submissionForm.classList.add("error");
  } else {
    emailInput.value = "";
    submissionForm.classList.remove("error");
  }
};


/**
 * Function to validate email input
 * Posted on Stack overflow:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};