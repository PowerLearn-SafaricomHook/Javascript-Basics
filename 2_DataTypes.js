

/*Learning Javaascript Data Types with code examples and explanations*/

const { default: test } = require("node:test");

/*Data Types in Javascript are divided into two categories:
1. Primitive Data Types
2. Non-Primitive Data Types
*/

//1. Primitive Data Types
/*Also called built-in data types, primitive data types are the basic data types in Javascript.
/*Primitive Data Types are immutable and stored directly in the location that the variable accesses.
When you access a primitive data type, you work on the actual value.*/
/*Primitive Data Types are passed by value.*/
/*Primitive Data Types are stored in the stack memory.*/
// they are directly supported by the language and are the most basic data types available.


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


//2. Non-Primitive Data Types
/* They are created by the programmer and are not defined by the programming language. */
/*Also called reference data types, non-primitive data types are not directly supported by the language.
Non-Primitive Data Types are mutable and stored in the heap memory.*/
/*Non-Primitive Data Types are passed by reference.*/

/*Non-Primitive Data Types include:
1. Object
2. Array
3. Function
4. Date

*/

//1. Object
/*Object represents a collection of key-value pairs.*/
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};


