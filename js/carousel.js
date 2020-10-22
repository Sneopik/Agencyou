let current_pos = 0;
const slides = $(".carousel-slides");

$(".carousel-slide:lt(3)").clone(true).appendTo(slides);

const changeSlides = () => {
  slides.css({
    transform: `translateX(${current_pos - 370}px)`,
    transition: "all 1s ease",
  });

  current_pos -= 370;

  if (current_pos <= -1481) {
    slides.css({
      transform: "translateX(0)",
      transition: "none",
    });

    current_pos = 0;
  }
};

setInterval(changeSlides, 5000);
