const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field. 
function getUserInput() {
    return parseInt(userInput.value);
}

//A function to generate and write the output/log of the calculator
function createAndWriteOutput(operator, resBeforeCalc, calcNumber) {
    const calcDescription = `${resBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);//from the vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        finalResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperation;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperation = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult-= enteredNumber;
        mathOperation = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperation = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber; 
        mathOperation = '/';
    }
    
    createAndWriteOutput(mathOperation, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);//On clicking this button, the add function will be called which calls, caclulationResult with the 'ADD' parameter value. 
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);







