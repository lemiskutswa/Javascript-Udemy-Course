//function that checks if number is even or odd
function isEvenOrOdd() {
    if(num % 2 == 0) {
        console.log(`${num} is even number`)
    }

    else {
        console.log(`${num} is odd number`)
    }
}

//checks if variable is number
function isNumber() {
    if(isNaN(num)) {
        console.log(`${num} is not a number`)
    }

    else{
        console.log(`${num} is valid a number`)
    }
}

//finds the largest number
function findLargest() {
    if(num1>num2) {
        console.log(`${num1} is the largest`)
    }

    else if (num1<num2) {
        console.log(`${num2} is the largest`)
    }

    else if (num1=num2) {
        console.log(`${num1} = ${num2}`)
    }
}

