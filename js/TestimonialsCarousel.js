function testimonialsCarousel() {
  const inputThumb = document.querySelector(".feedback__input");
  const feedbackBlockToMove = document.querySelector(
    ".feedbacks-container__slider"
  );
  let initialValue = 0;
  let diff;

  function moveOnDiff(value) {
    if (window.screen.width > 1599) {
      value += 2.75;
      feedbackBlockToMove.style.transform = `translate(-${value}%)`;
    } else {
      value = value * 1.42;
      feedbackBlockToMove.style.transform = `translate(-${value}%)`;
    }
  }

  function moveAtInitialPosition() {
    feedbackBlockToMove.style.transform = "translate(0)";
  }

  inputThumb.addEventListener("change", function () {
    let currentValue = this.value;
    if (currentValue === "0") {
      moveAtInitialPosition();
    }
    diff = +currentValue - +initialValue;
    if (diff > 0) {
      moveOnDiff(diff * 2);
    }
  });
}

testimonialsCarousel();

export { testimonialsCarousel };
