const buttonRef = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

buttonRef.addEventListener("click", onColorBody);

function onColorBody() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  spanEl.textContent = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
}
