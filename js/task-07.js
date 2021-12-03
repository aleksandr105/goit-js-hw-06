const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
spanEl.style.fontSize = `${inputEl.value}px`;

function sizeControl(event) {
  const eventValue = event.currentTarget.value;
  spanEl.style.fontSize = `${eventValue}px`;
}

inputEl.addEventListener("input", sizeControl);
