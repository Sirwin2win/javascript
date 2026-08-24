/*
A function is a block of code that does a job. The first thing we do is to dfine a function, then we call 
or invoke e.g
const greet = function(){
    console.log("Good morning everyone")
}
    function definition

    greet() // function call
        Different types of function
1. function with paraneters
2. higher order functions
3. arrow functions
      Classes of function 
    1. function expression: Where the function is assigned to a variable e.g
    const greet = function(){
      return "Good morning"
    }
    2. function declaration: We do not assign to a variable name e.g
    function greet(){
      return "Good morning"
    }
      Note: That function declaration could be hoisted
*/
// function dfinition
const greet = function () {
  console.log("Good mornng everyone");
};
// function call
greet();
const num = 5;
// function with parameters
/* parameters are variables used to define a function whoes values(arguements) are being passed at the point of
function call 
*/
// example
const square = function (a) {
  console.log(a ** 2);
};
square(4);
square(5);
square(10);
//  example 2
const Triangle = function (l, w) {
  console.log(l * w);
};
Triangle(2, 4);
Triangle(3, 3);
// Defualt Parameter values
const location = function (name, loc = "Somewhere") {
  console.log(`Good morning ${name} from ${loc}`);
};
location("Godwin", "Abuja");
location("Godwin");
// another example
const cube = function (r) {
  console.log(r ** 3);
};
cube(2);
cube(3);
const trapez = function (a, b, h) {
  // 1/2(a+b)h
  let result = 0.5 * (a + b) * h;
  console.log(result);
};
trapez(6, 10, 5);
// function return statement
const circle = function (r) {
  let pi = 3.14159;
  let area = pi * r ** 2;
  return area;
};
console.log(circle(4));
// y = 2X**2+5*x+3

const quad = function (a, b, c) {
  let root = (b ** 2 - 4 * a * c) ** 0.5;
  let base = 2 * a;
  let x1 = (-b + root) / base;
  let x2 = (-b - root) / base;
  //   return `${x1} ${x2}`;
  //   return [x1, x2];
  return { x1: x1, x2: x2 };
};

console.log(quad(1, -8, 15));
console.log(quad(2, 5, 3));
let a = 2 * (-1) ** 2;
let b = 5 * -1;
let c = 3;
let y = a + b + c;
console.log(y);
let y2 = 5 ** 2 + -8 * 5 + 15;
let y3 = 3 ** 2 + -8 * 3 + 15;
console.log(y2);
console.log(y3);
// What kind of value can be returned by a function
/*
A function can retuen any data type
*/
console.log(sayHello());
function sayHello() {
  return "Hello World!";
}
// A function that can multiply any 2 numbers we use to call it i.e a function with 2 parameters
