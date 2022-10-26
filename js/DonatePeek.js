function peekAndFeed() {
  const amountLine = document.querySelector(".amount-line");
  const outerDots = document.querySelectorAll(".amount-line__dot");
  const priceNums = document.querySelectorAll(".price-choose__element");
  const input = document.querySelector("#input-number");

  function colorDot(outerDot) {
    outerDot.classList.add("picked");
    let middleDot = outerDot.querySelector(".dot-middle");
    middleDot.classList.add("picked");
  }

  function colorNum(classNum) {
    let valueArr = classNum.split("");
    let priceValue = valueArr.slice(1).join("");
    let priceNum = document.querySelector(`.price-${priceValue}`);
    priceNum.classList.add("price-colored");
  }

  function removeColor() {
    for (let i = 0; i < outerDots.length; i++) {
      outerDots[i].classList.remove("picked");
      let middleDot = outerDots[i].querySelector(".dot-middle");
      middleDot.classList.remove("picked");
      priceNums[i].classList.remove("price-colored");
    }
  }

  function changeInputValue(valueStr) {
    let valueArr = valueStr.split("");
    let inputValue = valueArr.slice(1).join("");
    input.value = inputValue;
  }

  amountLine.addEventListener("click", function (e) {
    let clickedDigitClass = e.target.classList[1]; // digit
    let outerDot = amountLine.querySelector(
      `.amount-line__dot.${clickedDigitClass}`
    );
    if (outerDot) {
      removeColor();
      colorDot(outerDot);
      colorNum(clickedDigitClass);
      changeInputValue(clickedDigitClass);
    }
  });

  input.oninput = function () {
    if (this.value.length > 4) {
      this.value = this.value.substr(0, 4);
    }

    if (
      this.value == "25" ||
      this.value == "50" ||
      this.value == "100" ||
      this.value == "250" ||
      this.value == "500" ||
      this.value == "1000" ||
      this.value == "2000" ||
      this.value == "5000"
    ) {
      removeColor();
      let outerDot = amountLine.querySelector(
        `.amount-line__dot.v${this.value}`
      );
      colorDot(outerDot);
      let colorNumV = "v" + this.value;
      colorNum(colorNumV);
    } else {
      removeColor();
    }
  };
}

peekAndFeed();

export { peekAndFeed };
