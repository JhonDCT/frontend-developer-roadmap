const buttonMenuSimple = document.querySelector(".nav__menu__simple");
const buttonMenuHex = document.querySelector(".nav__menu__hex");
const divColorChoose = document.querySelector(".section__color-choose");
const buttonClickMe = document.querySelector(".section__button");
const divSection = document.querySelector(".section");
const h1RandomColor = document.querySelector(".random-color");

buttonClickMe.addEventListener("click", () => {
  let randomColor = computeRandomColor();
  assignRandomColor(randomColor);
});

let computeRandomColor = () => {
  let randomColor = "#";
  let characters = "0123456789ABCDEF";

  for (let index = 0; index < 6; index++) {
    let randomCharacterIndex = Math.floor(Math.random() * characters.length);
    randomColor += characters.charAt(randomCharacterIndex);
  }

  return randomColor;
};

let assignRandomColor = (randomColor) => {
  divSection.style.backgroundColor = randomColor;
  h1RandomColor.textContent = randomColor;
};
