function regulateBurgerMenu() {
  const burgerBtnMain = document.querySelector(".burger-btn-main");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerCloseBtn = document.querySelector(".burger-menu__close");

  burgerBtnMain.addEventListener("click", openBurgerMenu);

  function openBurgerMenu() {
    burgerMenu.style.opacity = "1";
    burgerMenu.style.visibility = "visible";
  }

  function closeBurgerMenu() {
    burgerMenu.style.opacity = "0";
    burgerMenu.style.visibility = "hidden";
  }

  burgerMenu.addEventListener("click", function (e) {
    if (e.target.classList.contains("burger-menu__blackout")) {
      closeBurgerMenu();
    }
  });
  burgerCloseBtn.addEventListener("click", closeBurgerMenu);
}
regulateBurgerMenu();

export { regulateBurgerMenu };
