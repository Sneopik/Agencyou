const header = document.getElementById("nav-menu-wrap");
const logoWhite = document.getElementById("Logo-White");
const logoBlack = document.getElementById("Logo-Black");
const upperTitle = document.getElementsByClassName("upper-title");
const navBtn = document.querySelector('.toggler-icon-inner');
const worksBtn = document.getElementsByClassName('works-btn');
const worksItems = document.getElementsByClassName('works-item');

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

const sortWorks = (elem) => {
  for (let i = 0; i < worksItems.length; i++) {
    if (worksItems[i].classList.contains(elem)) {
      worksItems[i].style.display = "block";
    } else {
      worksItems[i].style.display = "none";
    };
  };
}

worksBtn[0].addEventListener('click', () => sortWorks('works-item'));
worksBtn[1].addEventListener('click', () => sortWorks('web'));
worksBtn[2].addEventListener('click', () => sortWorks('brand'));
worksBtn[3].addEventListener('click', () => sortWorks('ui'));