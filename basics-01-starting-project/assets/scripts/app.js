const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);









//JS gives userInput.value as a text. That's why you get results like 0555 it just adds the value as strings next to each other.
//Instead of converting that input to a number and completing the calculation, it just leaves it as a string and concatenates