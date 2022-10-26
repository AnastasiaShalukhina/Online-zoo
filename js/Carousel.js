import { randomizeSrc } from "./RandomizeSrc.js";

function provideCarousel() {
  const carouselItemsFirst = document.querySelectorAll(
    ".card-container__first-row .slider-item"
  );
  const carouselItemsSecond = document.querySelectorAll(
    ".card-container__second-row .slider-item"
  );
  const arrowSliderLeft = document.querySelector(".arrow-left");
  const arrowSliderRight = document.querySelector(".arrow-right");
  let currentItemFirst = 0;
  let currentItemSecond = 0;
  let isEnabledFirst = true;
  let isEnabledSecond = true;

  function changeCurrentItem(nF, nS) {
    currentItemFirst =
      (nF + carouselItemsFirst.length) % carouselItemsFirst.length;
    currentItemSecond =
      (nS + carouselItemsSecond.length) % carouselItemsSecond.length;
  }

  function prevItem(nF, nS) {
    hideItem("to-right");
    changeCurrentItem(nF - 1, nS - 1);
    randomizeSrc();
    showItem("from-left");
  }

  function nextItem(nF, nS) {
    hideItem("to-left");
    changeCurrentItem(nF + 1, nS + 1);
    randomizeSrc();
    showItem("from-right");
  }

  function hideItem(direction) {
    isEnabledFirst = false;
    isEnabledSecond = false;

    carouselItemsFirst[currentItemFirst].classList.add(direction);
    carouselItemsFirst[currentItemFirst].addEventListener(
      "animationend",
      function () {
        this.classList.remove("shown", direction);
      }
    );

    carouselItemsSecond[currentItemSecond].classList.add(direction);
    carouselItemsSecond[currentItemSecond].addEventListener(
      "animationend",
      function () {
        this.classList.remove("shown", direction);
      }
    );
  }

  function showItem(direction) {
    carouselItemsFirst[currentItemFirst].classList.add("next", direction);
    carouselItemsFirst[currentItemFirst].addEventListener(
      "animationend",
      function () {
        this.classList.remove("next", direction);
        this.classList.add("shown");
        isEnabledFirst = true;
      }
    );

    carouselItemsSecond[currentItemSecond].classList.add("next", direction);
    carouselItemsSecond[currentItemSecond].addEventListener(
      "animationend",
      function () {
        this.classList.remove("next", direction);
        this.classList.add("shown");
        isEnabledSecond = true;
      }
    );
  }

  arrowSliderRight.addEventListener("click", function () {
    if (isEnabledFirst && isEnabledSecond) {
      nextItem(currentItemFirst, currentItemSecond);
    }
  });

  arrowSliderLeft.addEventListener("click", function () {
    if (isEnabledFirst && isEnabledSecond) {
      prevItem(currentItemFirst, currentItemSecond);
    }
  });
}

provideCarousel();

export { provideCarousel };
