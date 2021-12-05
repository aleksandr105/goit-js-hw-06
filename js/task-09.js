const buttonRef = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonRef.addEventListener("click", onColorBody);

function onColorBody() {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}
