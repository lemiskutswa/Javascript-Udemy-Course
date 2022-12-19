const defaultResult = 10;
let currentResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;     
}


currentResult = add(10, 12);

currentResultDescription = `(${defaultResult} + 10*3/2-1)`;

outputResult(currentResult, currentResultDescription);

