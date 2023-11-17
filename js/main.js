const navHandler = document.querySelector(".nav__content");
const burgerBtnHandler = document.querySelector(".burger-btn");
const links = document.querySelectorAll(".nav__item");

const handleNav = () => {
  navHandler.classList.toggle("nav__content--active");

  links.forEach((link) =>
    link.addEventListener("click", () => {
      navHandler.classList.remove("nav--active");
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

burgerBtnHandler.addEventListener("click", handleNav);
