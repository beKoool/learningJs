
<img src="https://user-images.githubusercontent.com/76424367/195898471-ded95f55-2056-44ac-a9da-2d52bd822841.png" alt="drawing" width="800"/>

# Week 1 👨‍💻

Hello guys, so I am in the first week of learning JavaScript. At first, lets talk about `What is JavaScript?`. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!

## How can I run JavaScript code? 🤔

So you can run JavaScript code using various methods. Some of them are:

- From the **Command Line**
- From the **Browser**
- From `<script>` tag in **HTML file**, etc.

## Things that I have learnt this week 🏫
- [Variables](#variables)
- [Data Types](#data-types)
- [Comments](#comments)
- [Operators](#operators)
- [Conditionals](#conditionals)
- [Functions](#functions)


## Variables
[Variables](https://developer.mozilla.org/en-US/docs/Glossary/Variable) are containers that store values. Variables are assigned a descriptive name so that the programmers can call them to assign a specific value.

**Example:**
```javascript
var myMood = "happy";
console.log("My mood is " + myMood );
```
> Note: JavaScript is case sensitive. This means `myMood` is not the same as `mymood`.

### Declaring Variables

Any of these 3 keywords can be used while declaring variables in JavaScript. They are:

-   `var`, used in pre-ES6 versions of JavaScript. 👴
-   `let`, the preferred way to declare a variable when it can be reassigned. 👍
-   `const`, the preferred way to declare a variable with a constant value. ✌

## Data Types 

Data Types are the classifications we give to the different kinds of data that we use in programming. 


| Data Types  | Description  | Example  |
|---|---|---|
| Number  |  This is a number. Numbers don't have quotes around them. |  `let myAge = 4;` |
|  String |  Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes `''` or double quotes `""`. | `let myName = "Jimmy";`  |
| <span id="boolean">Boolean</span>  |This data type only has two possible values — either `true` or `false`.   | `let isProductive = false; `  |
|  BigInt| Any number, greater than 2^53-1 or less than -(2^53-1) with `n` appended to the number  | `let bigInteger = 1234567890123456n`  |
| Object  |  Collections of related data | `let user =  { name:  'John',  age:  22, isProductive:  true,};`|
| Null| This data type represents the intentional absence of a value, and is represented by the keyword `null`.  | `let e = null`  |
| Undefined  | This data type is denoted by the keyword `undefined`. It also represents the absence of a value though it has a different use than `null`.  |  `let a;` *a is undefined here* |
| Symbol  | Symbols are unique identifiers, useful in more complex coding. **No need to worry about these for now.**  |  `const mySymbol = Symbol('id');` |


## Comments

Comments are snippets of text that can be added along with code. The text marked as comment is ignored by the browser. Writing comment in JavaScript is quite similar writing comments in CSS:


```
// I am a single-line comment.
```


```
/*
Hello, sup? I am a multi-line comment.
*/
```

## Operators
An [operator](https://developer.mozilla.org/en-US/docs/Glossary/Operator) is a mathematical symbol that produces a result based on two values (or variables). Some of the simplest operators of JavaScript are given below: 


| Operator  | Description  |  Symbol(s) | Example |
|---|---|---|---|
|  Addition |  Add two numbers together or combine two strings. | `+`  |  `1 + 2;`  `'Hello' + 'World';` |
|  Subtraction, Multiplication, Division | Works same as basic maths  | `-`, `*` and `/`  | `1-2;` `1*2;` `1/2;` |
|  Assignment |  Assigns a value to a [Variable](#variables) | `=`  |  `let myAge = "2";` |
| Strict equality  |  Checks if two values are equal and shows result in [Boolean value](#boolean) |===   |  `let myVariable = 3;` `myVariable === 4;` |
|  Not,Does-not-equal | This returns the logically opposite value of what it precedes. It turns a `true` into a `false`, etc.. When it is used alongside the Equality operator, the negation operator tests whether two values are _not_ equal.  | `!`,`!==`  | For NOT: `let myNumber = 2;` `!(myNumber === 2);` For Does-not-equal: `let year = 2022;` `year !== 2022;` |


> Note: These are only the basic operators of JavaScript. To learn more about objects, visit to [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

## Conditionals

[Conditionals](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#conditionals) take an expression, which is code that evaluates to determine a value, and checks if it is `true` or `false`. If it’s `true`, we can tell our program to do one thing — we can even account for `false` to do another. A very common form of conditionals is the `if...else` statement. 
#### Examples:
```javascript
// If.. Else statements
let age = 18;
if (age >= 18) {
  console.log("Yay, you can get a driving license!");
} else {
  console.log("Awwww, you are underage to get a driving license");
}
```
>So in the code given above, we are checking the value of age to find if it is more than or equal to 18. If the age is more than or equal to 18, the first block of code runs and if the age is less than 18, the second block of code runs.

```javascript
// Switch keyword
const fruit = 'Mangoes';
switch (fruit) {
  case 'Mangoes':
    console.log('Mangoes are yummy.');
    break;
  case 'Oranges':
    console.log('Oranges are tasty.');
    break;
  case 'Papayas':
    console.log('Papayas are fine.');
    break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}
```

```javascript
// Ternary Operators
let marks = prompt('Enter your marks :');
let result = (marks >= 40) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);
```

## Functions
[Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function) are one of the fundamental building blocks in JavaScript. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

### Built-in browser functions:
The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself. Some of the are given below 🔽:

```javascript
const randomNumber = Math.random();
// the random() function generates a random number between 
// 0 and up to but not including 1, and returns that number
```

```javascript
const myString = 'I am a string';
const newString = myString.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

###  Function Declaration

Function declarations are used to create named functions. Function declarations are built from:

-   The  `function`  keyword.
-   The function name.
-   An optional list of parameters separated by commas enclosed by a set of parentheses  `()`.
-   A function body enclosed in a set of curly braces  `{}`.

### Calling Functions

Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. 

The example code given below contains a function named  `product()`  that takes in two values and prints their product:

```javascript
function product(number1, number2) {
 console.log(number1 * number2);
}

product(2,4);
```
### Return Keyword

Functions return (pass back) values using the  `return`  keyword.  `return`  ends function execution and returns the specified value to the location where it was called.

```javascript
// With return
function  sum(num1, num2)  {
	return num1 + num2;
}
sum(1,2); //OUTPUT = 3

// Without return, so the function doesn't output the sum
function  sum(num1, num2)  {
	num1 + num2;
}
sum(1,2); //OUTPUT = undefined
```

> Note: If you want to know more about functions and its types like Arrow functions, Anonymous functions,etc. you can visit the [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) or [Codecademy docs](https://www.codecademy.com/resources/docs/javascript/functions). 😁

## Ending Note 🧡

Thank you for visiting this repository ! I am trying my best to be consistent in Learning JavaScript so that I can achieve my dreams in life 😉. Please suggest me some ways to improve on tracking my progress on this repository and feel free to give your feedbacks to me ✌.

Made with 💖by [TheCoolGDev](https://www.github.com/TheCoolGDev)
