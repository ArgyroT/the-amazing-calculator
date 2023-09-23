const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((numberButton) => {
  numberButton.onclick = () => {
    if (screen.innerText === "0") {
      screen.innerText = "";
    }
    screen.innerText += numberButton.innerText;
  };
});

const clearButton = document.getElementById("clear");
clearButton.onclick = () => {
  screen.innerText = "0";
};

const backButton = document.getElementById("back");
backButton.onclick = () => {
  screen.innerText = screen.innerText.slice(0, -1);
  if (screen.innerText == "") {
    screen.innerText = "0";
  }
};

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((operatorButton) => {
  operatorButton.onclick = () => {
    //
  };
});
