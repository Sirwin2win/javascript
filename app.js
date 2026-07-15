console.log("Hello World"); // sending to ouput streem <!-- HTML--> /* CSS*/
const name = "Jonh Doe"; // string
const age = 20; // integers(whole numbers), numbers, floot(2.4)
const cars = ["Toyota", "Honda", "KIA"]; // array
const names = {
  name: "Peter Doe",
  age: 23,
  favColor: "red",
  email: "peterdoe@gmail.com",
}; // object
const isMonday = true; // boolean
const isSunday = false; //boolean
// Single line comments
/* 
Multiple 
line
 comments    
 */
// Variables are containers for storing values
console.log(name);
console.log(age);
console.log(cars);
console.log(names);
// How To choose a variable name
/*
1. camel Case: e.g fistName, lastName
2. Pascal Case: FirstName,LastName,FullName
3. Snake Case: first_name,last_name,full_name
4. Do not start a variable name with a number, special character etc
*/
// Data Types
/*
1. Integers(Numbers) e.g  4, 50,1000
2. Strings(letters) e.g "hello", "email@example.com"
3. float e.g 3.5, 10.0
4. Arrays(a collection of things) e.g ["Uche",25,true,false]
5. Objects(a collection in key/value pairs) e.g {name:"Mary Doe",age:15,weight:50}
6. Boolean e.g true/false

Variable Keywords 
1. const ; used to declare constant variables (good for global scope)
2. let; used to declare variables that we might overwright (good for local scope)
3. var; older keyword and is used for all variable scopes
Variable Scopes
1. local
2. global
*/
// Keywords; they are used to define action to be performed e.g let, const, true, false, var, function
const firstName = "Godwin"; // global
console.log(firstName);
let a = 5;
console.log((a += 3));
var b = 10;
console.log((b += 3));
// function
const greet = function () {
  let today = "Wednesday"; // local
  console.log("Good morning " + firstName + " today is," + today);
};
greet();

// console.log(today);
// conditional statement
if (age >= 20) {
  let name = "Uche";
  console.log(name + " Is now an adult");
}
