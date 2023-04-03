#A Javascript course from Fundamentals to Advanced Concepts

#Template Literals

- Syntax: `(${variable})`
- Allows you to insert dynamic variables inside a string. They are preferred to concatenation since they are easier to read. You can also use this to write multi-line strings to help with readability. 

- You can use \n to display a string in a new line within the quotes of a string. the backslash escapes the next character from normal syntax


<h1 style='color: #FF0000;'>Functions</h1>
Functions that work without any input do not require a parameter. When JS sees your function, it doesn't get executed immediately, it stores it in memory waiting for the function call. 

You can only pass values during calling if a function has parameters. 

You can call the function before defining it and it still works. This is because the browser first reads your script and registers any functions before it can begin execution. 

In a function, you can access global scope variables/constants, but you can't do the reverse. \n 
The return statement *completes function execution*

You can execute functions indirectly by naming the function for example in an event listener without including the brackets. This ensures that the function is not executed when the browser is parsing the srcipt. 

How to return more than one piece of data? Future lectures

- addEventListner is a builtin JS function

<h2>Converting Data types</h2>

Even when you specify that an input type in javascript should be a string, it executes them as integers. So when you have a calculator, for example, it will concatenate(for addition) numbers and output them as strings instead of converting the number to an actual number for a mathematical addition operation. 

This is where parseInt() comes in. It converts the number initially executed as a string to a number for a mathematical operation.You can also use a plus (+) instead of parseInt/parseFloat. 

{NOTE}: The plus operator is the only one that supports string concatenation on JS. For other operations, Javascript recognizes them and converts the preciding number to an actual number rather than a string. 

Thankfully, JavaScript is pretty smart and therefore is actually able to handle this code:

3 * '3' => 9

Please note: It yields the number (!) 9, NOT a string '9'!

Similarly, these operations also all work:

3 - '3' => 0

3 / '3' => 1

Just 3 + '3' yields '33' because here JavaScript uses the "I can combine text" mode of the + operator and generates a string instead of a number.

<h2>Writing efficient code</h2>
- In Js, you can't pass an operator as value. 
- JS data types include: Numbers, String, Booleans (for conditional code when you have 2 options), Arrays (list of data), and Objects {the most important}. 

# More operators
currentResult = currentResult + enteredNumber; 

            IS THE SAME AS 
currentResult += enteredNumber; (This is a great shortcut)

NOTE: The purpose of arrays is to store numbers, strings, objects, etc. inside a variable. 
- When curly braces come after an = sign, add a semicolon at the end (like it is for objects)

<h3>Special values</h3>
Undefined is given to variables without a value

Null on the other hand is never a default value - you can assign a value as null if you want to reset or clear a variable

NaN, unlike the previous 2, is not a data type - it is usually an error, for example, resulting from multiplying a string and a number. To put it simply, it is as a result of invalid calculations. 

<h3>Loading JS scripts earlier</h3>
We place JS files at the bottom of the HTML file because we want to execute it only after the HTML file has been parsed. However, if you have a large HTML file, this adds to the page loading time which could add infrastructure costs. 

Therefore, you would want to load the JS files earlier but still execute them after the HTML file has been parsed. This allows you to get the best of both worlds. You can check the performance of your pages from the 

                        Note: Parsing = analyzing HTML to figure out what to construct and what to download. Rendering = drawing pixels to your screen based on HTML + CSS construction. 

image.png 

To solve this, you can place the script calls on the header and use the defer attribute. It ensures that the scripts are downloaded early but execution only starts after parsing of HTML is complete. 

What if you have scripts that don't require HTML to be parsed first (the script doesn't interact with the webpage), use the "async" attribute in place of defer. Async will ensure that the scripts are downloaded early and executed as soon as the download is complete. 


<h2>Debugging and efficient development</h2>
Useful shortcuts

- select next occurence: Ctrl + D
- comment code: Ctrl + /
- Ctrl space: bring back suggestion menu for autocompletion

The first step to debugging is reading the error message - if there is one (when it is not a logical error). 

Secondly, use console.log to debug logical errors

Next, you can use chrome debugging tools built into the browser. 

Your IDE can also help you to debug. 

Breakpoints in chrome dev tools lets you stop code execution when a certain point is reached. You can use the sources section to 

<h2>Working with control structures</h2>
Used when you have some conditions to be met before you execute a certain piece of code or when you want to repeat code execution. 

Boolean Operators: help in returning true/false. Examples: 

1. The Equality operator == to check for value equality
2. != - checks for value inequality
3. === checks for value and type equality
4. !== checks for value and type inequality
5. > & <> signs
6. >= or <= signs greater than or equal or, smaller than or equal. 
7. ! to check if not true

In JS, you should prefer ===/!== over ==/!=. This means that, with control structures, you should care about the type of values that you work with. 

- Strings can also be compares as greater than or less than. For example b > a. Also capital letters are considered to be smaller than lower case letters. 

- If you have a variable that holds a boolean, you don't have to re-use a boolean operator in the condtion section of an if statement. For instance, 

                                const loggedIn = true;
                                if (loggedIn) {
                                    some code;
                                }

                                else{
                                    some code;
                                }

<h2>If else statements</h3>
- If you want to introduce more than 2 conditions, use else if. The last 'else' code will always be run if no condition has been met. With else if, you have to introduce new conditions just like the initial if statement. 

- If you have only 2 conditions use else, if you have more conditions, use else if. 

- Objects and arrays with the same value do not yield true when they are compared. Why? It has something to do with how they're stored in memory. 

To get true, you'll have to compare the values. For example

const person1 = {name: 'Max'};

const person2 = {name: 'Max'};

person1.name = person2.name //true

but person1 = person 2 //false

Return stops the execution of the code that comes after it. This is useful when you want to check if a situation doesn't meet a given condition and stop the execution of the preceding code. 


<h3>Operator precedence</h3>
Same as BODMAS? Associativity doesn't matter if the precedence is higher. But if operatons have the same precedence, the interpretation follows right-to-left associativity. 

<h3>Falsy and truthy values</h3>
== - abstract equality


=== - strict equality. 


JS generally works with booleans values (true/false) and truthy & falsy too. 

If a boolean is required, javascript tries to coerce a boolean value. Caste in point: Let's say you have a constant:

const userName = 'Lemis';

if (userName === 'Lemis') {...} //Yields true

if (userName) {...} // Also yields true because of the statement above

Zero is inately treated as a fasly value. So if a variable holds zero, the condition is initially false, which mean the code in the if statement will not be executed. This can be useful when you don't want to use zero in your calculations, for example in division. 

Truthy - any other number, objects, arrays

Falsy - 0, NaN, empty string, and undefined. 

<h3>Monster Killer Project</h3>

You can use uppercase letters to define global variables/contstants. 

A string can be a value which you pass with aa condition in an if/else statement just like you would for a number.