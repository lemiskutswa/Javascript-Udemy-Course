// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

const sayHello = (name) => { 
  console.log('Hi ' + name);
; }

sayHello('John');

const sayHello2 = (greeting, name1) => {
  console.log(greeting + name1);
}

sayHello2('Hello ', 'John');

const sayHello3 = () => {
  console.log('Hello Johnny');
}

sayHello3();

let defaultVariable = 'Johntes';

const sayHello4 = (greeting1, name2) => {
  return greeting1 + name2;
}

console.log(sayHello4('Hello ', 'Johnstone'));

//Add a prompt to get user input - give this a variable
// Add a default value for the variable

let userName = prompt('Please Enter Your Name: ') || defaultVariable;

if (userName === '' || userName === null || userName === number) {
  userName = defaultVariable;
}

console.log(userName);

