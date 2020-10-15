const header = document.getElementById("nav-menu-wrap");
const logoWhite = document.getElementById("Logo-White");
const logoBlack = document.getElementById("Logo-Black");
const upperTitle = document.getElementsByClassName("upper-title");
const navBtn = document.querySelector('.toggler-icon-inner');

const handleScroll = () => {
  const rectTitle = upperTitle[0].getBoundingClientRect();
  const rectHeader = header.getBoundingClientRect();

  if (rectTitle.top < rectHeader.height) {
    header.classList.add("header-shrink");
    logoWhite.style.display = "none";
    logoBlack.style.display = "inline";
    navBtn.classList.add("toggler-icon-inner--black");
  } else {
    header.classList.remove("header-shrink");
    logoWhite.style.display = "inline";
    logoBlack.style.display = "none";
    navBtn.classList.remove("toggler-icon-inner--black");
  }
};

window.addEventListener("scroll", () => handleScroll());
