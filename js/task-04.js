const buttonDecrement = document.querySelector("[data-action = decrement]");
const buttonIncrement = document.querySelector("[data-action = increment]");
const counter = document.querySelector("#value");

let counterValue = 0;

const clicAddCheck = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
buttonIncrement.addEventListener("click", clicAddCheck);

const clicRemoveCheck = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
buttonDecrement.addEventListener("click", clicRemoveCheck);
