let current_pos = 0;

const changeSlides = () => {
  const slides = $(".carousel-slides");
  const first_slide = $(".carousel-slide").first();

  setTimeout(() => first_slide.clone().appendTo(slides), 0);

  slides.css({
    transform: "translateX(-390px)",
    transition: "all 1s ease",
  });

  slides.css({
    transform: "translateX(0)",
  });

  setTimeout(() => first_slide.remove(), 100);
};

setInterval(changeSlides, 5000);
