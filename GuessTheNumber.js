const randomNumber = Math.floor(Math.random() * 100) + 1;
const userInput = document.querySelector("input");
const submitButton = document.getElementById("submitBtn");
const restartButton = document.getElementById("restartBtn");
const message = document.querySelector("p");
const form = document.querySelector("form");
let counter = 0;

const validateInput = (e) => {
  e.preventDefault();
  message.textContent = "";
  if (counter == 10) {
    message.textContent = "You did not guess the no.";

    message.style.backgroundColor = "red";
    message.style.width = "500px";
    form.reset();
    restartButton.hidden = false;
    submitButton.disabled = true;
    return;
  }

  if (userInput.value > randomNumber) {
    message.textContent = "input is too higher than the random";

    message.style.backgroundColor = "red";
    message.style.width = "500px";
  } else if (userInput.value == randomNumber) {
    message.textContent = "input is equal to the no";

    message.style.backgroundColor = "green";
    message.style.width = "500px";
    form.reset();
    restartButton.hidden = false;
    submitButton.disabled = true;

    return;
  } else if (userInput.value < randomNumber) {
    message.textContent = "input is lower than the no";

    message.style.backgroundColor = "red";
    message.style.width = "500px";
  }

  counter += 1;
};

const reStartTheGame = (e) => {
  e.preventDefault();
  counter = 0;
  restartButton.hidden = true;
  submitButton.disabled = false;
  message.textContent = "";
};
submitButton.addEventListener("click", validateInput);
restartButton.addEventListener("click", reStartTheGame);
