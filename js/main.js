const navHandler = document.querySelector(".nav__content");
const burgerBtnHandler = document.querySelector(".burger-btn");
const links = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
  navHandler.classList.toggle("nav__content--active");

  links.forEach((link) =>
    link.addEventListener("click", () => {
      navHandler.classList.remove("nav__content--active");
    })
  );

  handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
  links.forEach((link, index) => {
    link.classList.toggle("nav-items-animation");
    link.style.animationDelay = 0.3 + (index - 1) * 0.1 + "s";
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

const handleObserver = () => {
  const currentSection = window.scrollY;

  allSections.forEach((section) => {
    if (
      section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navBtnBars.classList.add("black-bars-color");
    } else if (
      !section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navBtnBars.classList.remove("black-bars-color");
    }
  });
};

handleCurrentYear();
burgerBtnHandler.addEventListener("click", handleNav);
window.addEventListener("scroll", handleObserver);
