const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const mailValueLength = event.currentTarget.email.value.length;
  const passwordValueLength = event.currentTarget.password.value.length;

  if (mailValueLength === 0 || passwordValueLength === 0) {
    alert("Все поля должны быть заполнены!!!");
  }

  const objektForm = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  console.log(objektForm);
  event.currentTarget.reset();
}
