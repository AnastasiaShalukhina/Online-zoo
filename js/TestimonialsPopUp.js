function testimonialsPopUp() {
  const popUpTestimonials = document.querySelector(".pop-up-testimonials");
  const feedbackContainer = document.querySelector(
    ".feedbacks-container__slider"
  );

  function turnOnPopUp() {
    feedbackContainer.addEventListener("click", function (event) {
      let target = event.target;
      if (target.closest(".feedback")) {
        popUpTestimonials.style.visibility = "visible";
        popUpTestimonials.style.opacity = "1";
      }
    });
  }

  function closePopUp() {
    popUpTestimonials.style.visibility = "hidden";
    popUpTestimonials.style.opacity = "0";
  }

  if (+window.screen.width < 1000) {
    turnOnPopUp();
  }

  popUpTestimonials.addEventListener("click", function (event) {
    let target = event.target;
    if (!target.closest(".pop-up__content")) {
      closePopUp();
    }
  });
}

testimonialsPopUp();

export { testimonialsPopUp };
