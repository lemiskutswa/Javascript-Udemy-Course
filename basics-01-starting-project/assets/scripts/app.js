const defaultResult = 0;

let currentResult = defaultResult;

currentResult = (currentResult + 10) *3/2-1; 

currentResultDescription = `(${defaultResult} + 10*3/2-1)`;

let errorMessage = 'An error' + 
                ' has occured!';

console.log(errorMessage);

outputResult(currentResult, errorMessage);

