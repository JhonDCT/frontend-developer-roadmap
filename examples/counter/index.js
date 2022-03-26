var counter = 0;

const h1Counter = document.querySelector(".section__counter");
const buttonDecrease = document.querySelector(".decrease");
const buttonReset = document.querySelector(".reset");
const buttonIncrease = document.querySelector(".increase");

buttonDecrease.addEventListener("click", () => {
  counter -= 1;
  updateDOM();
});

buttonReset.addEventListener("click", () => {
  counter = 0;
  updateDOM();
});

buttonIncrease.addEventListener("click", () => {
  counter += 1;
  updateDOM();
});

let updateDOM = () => {
  h1Counter.textContent = counter;

  let counterIsPositive = counter > 0;

  if (counterIsPositive) {
    h1Counter.style.color = "green";
  }

  if (!counterIsPositive) {
    h1Counter.style.color = "red";
  }

  if (counter === 0) {
    h1Counter.style.color = "black";
  }
};
