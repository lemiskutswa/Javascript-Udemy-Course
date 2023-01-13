const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function jibberish() {}

function add() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult}* ${enteredNumber}`;
  currentResult = currentResult*enteredNumber;
  outputResult(currentResult, calcDescription);
}

function divide() {}

addBtn.addEventListener('click', add);







