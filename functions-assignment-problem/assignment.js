// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// const sayHello = (name) => { 
//   console.log('Hi ' + name);
// ; }

// sayHello('John');

// const sayHello2 = (greeting, name1) => {
//   console.log(greeting + name1);
// }

// sayHello2('Hello ', 'John');

// const sayHello3 = () => {
//   console.log('Hello Johnny');
// }

// sayHello3();

// let defaultVariable = 'Johntes';

// const sayHello4 = greeting1 => greeting1;

// console.log(sayHello4('Hello Johnstone'));

//Add a prompt to get user input - give this a variable
// Add a default value for the variable

// let userName = prompt('Please Enter Your Name: ') || defaultVariable;

// if (userName === '') {
//   userName = defaultVariable;
// }

// console.log(userName);


const one = (callback) => {
  setTimeout(function () {
    console.log('This is one'); 
  }, 2000)

  two();
};


const two = () => {
  console.log('This is two');
}

one(two);

function lemis(name, callback) {
  console.log('My first name is:' + name);

  secondName();
}

function secondName() {
  console.log('My second name is Kutswa');
}

lemis('Lemis', secondName);

function multiplyByTwo (number) {
  return number*2;
}

function applyCallBack(number, callback) {
  return multiplyByTwo(10) + 10; 
}

console.log(applyCallBack(2, multiplyByTwo()));