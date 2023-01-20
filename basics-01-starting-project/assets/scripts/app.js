const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field. 
function getUserInput() {
    return parseInt(userInput.value);
}

//A function to generate and write the output/log of the calculator
function createAndWriteOutput(operator, resBeforeCalc, calcNumber) {
    const calcDescription = `${resBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}


//Basic math operation functions.
function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);







