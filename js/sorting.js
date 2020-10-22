const worksBtn = document.querySelector(".works-filter");
const worksItems = document.querySelectorAll(".works-item");

const sortWorks = (select) => {
  worksItems.forEach((el) => {
    el.classList.contains(select) ? showElement(el) : hideElement(el);
  });
};

const hideElement = (el) => {
  el.style = "transform: scale(0); opacity: 0;";
  setTimeout(() => (el.style.display = "none"), 280);
};

const showElement = (el) => {
  el.style = "display: block";
  setTimeout(() => {
    el.style = "transform: scale(1); opacity: 1;";
  }, 1000);
};

worksBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sortWorks(e.target.dataset.sorting);
  $(".works-btn:lt(4)").removeClass("current");
  e.target.classList.add("current");
});
