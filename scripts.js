const operators = ["/", "*", "-", "+"];
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

const divideButton = document.getElementById("divide");
divideButton.onclick = () => {
  addOperatorToScreen("/");
};

const multiplyButton = document.getElementById("multiply");
multiplyButton.onclick = () => {
  addOperatorToScreen("*");
};

const minusButton = document.getElementById("minus");
minusButton.onclick = () => {
  addOperatorToScreen("-");
};

const plusButton = document.getElementById("plus");
plusButton.onclick = () => {
  addOperatorToScreen("+");
};

const equalsButton = document.getElementById("equals");
equalsButton.onclick = () => {
  // eval is bad and I am well aware of its risks when using it in production. How can I do it better?
  screen.innerText = eval(screen.innerText);
};

function addOperatorToScreen(newOperator) {
  operators.forEach((operator) => {
    // if the last button clicked was any operator, remove it, so it can be replaced
    if (screen.innerText[screen.innerText.length - 1] == operator) {
      screen.innerText = screen.innerText.slice(0, -1);
    }
  });

  screen.innerText += newOperator;
}
