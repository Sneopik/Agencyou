const navToggler = document.querySelectorAll(".btn-line");
const btn = document.querySelector(".navbar-toggler");

const transormBtn = () => {
  const attribute = btn.getAttribute("aria-expanded");
  console.log(attribute);
  if (attribute == "false") {
    navToggler[0].style = "transform: rotate(-45deg) translate(-5px, 6px);";
    navToggler[1].style.opacity = "0";
    navToggler[2].style = "transform: rotate(45deg) translate(-5px, -6px);";
  } else {
    navToggler.forEach((el) => {
      el.removeAttribute("style");
    });
  }
};

btn.addEventListener("click", () => {
  transormBtn();
});
