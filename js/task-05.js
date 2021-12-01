const nameInputRef = document.querySelector("#name-input");
const nameResultInput = document.querySelector("#name-output");

nameInputRef.addEventListener("input", outputResultEnteringName);

function outputResultEnteringName(event) {
  nameResultInput.textContent = event.currentTarget.value;

  if (event.currentTarget.value.length === 0) {
    nameResultInput.textContent = "Anonymous";
  }
}
