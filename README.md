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

This is where parseInt() comes in. It converts the number initially executed as a string to a number for a mathematical operation. 

