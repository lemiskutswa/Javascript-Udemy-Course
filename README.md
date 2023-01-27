A Javascript course from Fundamentals to Advanced Concepts

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