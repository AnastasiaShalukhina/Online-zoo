function randomizeSrc() {
  let animalsArr = [
    "pandas",
    "eagles",
    "gorillas",
    "sloth",
    "cheetahs",
    "penguins",
  ];
  let imgSources = [];
  let itemImgArr = [];

  for (let i = 0; i < animalsArr.length; i++) {
    imgSources.push(`../../assets/images/main/pets/${animalsArr[i]}.png`);
  }

  for (let i = 0; i < animalsArr.length; i++) {
    let elemImg = document.querySelector(`.card-image.image__${animalsArr[i]}`);
    itemImgArr.push(elemImg);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(imgSources); // shuffled array with src

  function getName(str) {
    let totalArr = str.split("/");
    let lastEl = totalArr[totalArr.length - 1];
    let NamePngArr = lastEl.split(".");
    let animalName = NamePngArr[0];
    return animalName;
  }

  function getParagraphToFill(item) {
    let descrContainer = item.nextElementSibling;
    let descrContainerChildren = descrContainer.children;
    let descrText = descrContainerChildren[0].children;
    let animalNameParagraph = descrText[0];
    return animalNameParagraph;
  }

  for (let i = 0; i < itemImgArr.length; i++) {
    let item = itemImgArr[i];
    let paragraphToFill = getParagraphToFill(item);
    let nameAnimal = getName(imgSources[i]);
    paragraphToFill.textContent = nameAnimal;
    itemImgArr[i].src = imgSources[i];
  }
}
randomizeSrc();

export { randomizeSrc };
