const header = document.getElementById("nav-menu-wrap");
const logoWhite = document.getElementById("Logo-White");
const logoBlack = document.getElementById("Logo-Black");
const upperTitle = document.getElementsByClassName("upper-title");
const navBtn = document.querySelector(".toggler-icon-inner");
const navLinks = document.querySelectorAll(".nav-link");
const scrollTopBtn = document.getElementById("scroll-top-btn");

const handleScroll = () => {
  const rectTitle = upperTitle[0].getBoundingClientRect();
  const rectHeader = header.getBoundingClientRect();

  if (rectTitle.top < rectHeader.height) {
    header.classList.add("header-shrink");
    logoWhite.style.display = "none";
    logoBlack.style.display = "inline";
    navBtn.classList.add("toggler-icon-inner--black");
    navLinks.forEach((el) => {
      el.classList.add("nav-link--black");
    });
    scrollTopBtn.style = "visibility: visible; opacity: 1; bottom: 10px;";
  } else {
    header.classList.remove("header-shrink");
    logoWhite.style.display = "inline";
    logoBlack.style.display = "none";
    navBtn.classList.remove("toggler-icon-inner--black");
    navLinks.forEach((el) => {
      el.classList.remove("nav-link--black");
    });
    scrollTopBtn.style = "visibility: hidden; opacity: 0; bottom: 0px;";
  }
};

window.addEventListener("scroll", () => handleScroll());
scrollTopBtn.addEventListener("click", () => window.scrollTo(0, 0));
