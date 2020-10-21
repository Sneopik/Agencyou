const header = document.getElementById("nav-menu-wrap");
const logoWhite = document.getElementById("Logo-White");
const logoBlack = document.getElementById("Logo-Black");
const upperTitle = document.getElementsByClassName("upper-title");
const navBtn = document.querySelector(".toggler-icon-inner");
const navLinks = document.querySelectorAll(".nav-link");
const worksBtn = document.querySelector(".works-filter");
const worksItems = document.querySelectorAll(".works-item");

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
  } else {
    header.classList.remove("header-shrink");
    logoWhite.style.display = "inline";
    logoBlack.style.display = "none";
    navBtn.classList.remove("toggler-icon-inner--black");
    navLinks.forEach((el) => {
      el.classList.remove("nav-link--black");
    });
  }
};

window.addEventListener("scroll", () => handleScroll());

const sortWorks = (select) => {
  worksItems.forEach((el) => {
    el.classList.contains(select)
      ? (el.style.display = "block")
      : (el.style.display = "none");
  });
};

worksBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sortWorks(e.target.dataset.sorting);
});
