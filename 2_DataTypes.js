

/*Learning Javaascript Data Types with code examples and explanations*/

/*Data Types in Javascript are divided into two categories:
1. Primitive Data Types
2. Non-Primitive Data Types
*/

//1. Primitive Data Types
/*Primitive Data Types are immutable and stored directly in the location that the variable accesses.
When you access a primitive data type, you work on the actual value.*/

/*Primitive Data Types include:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
*/

//1. Number
/*Number represents both integer and floating point numbers.*/
let num = 10;
// console.log(typeof num); //number


//2. String
/*String represents a sequence of characters enclosed within single or double quotes.*/
let str = "Hello";
// console.log(typeof str); //string

//3. Boolean
/*Boolean represents a logical entity and can have two values: true or false.*/
let isRaining = true;
// console.log(typeof isRaining); //boolean

//4. Undefined
/*Undefined represents a variable that has been declared but not assigned any value.*/
let x;
// console.log(typeof x); //undefined

//5. Null
/*Null represents an empty value.*/
let y = null;
// console.log(typeof y); //object

//6. Symbol
/*Symbol represents a unique value.*/
let sym = Symbol("hello");
console.log(typeof sym) //false

