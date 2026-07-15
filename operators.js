/* Operators are used to carry out operations on variables
1. Arithmetic Operators +;-;/;*;**;%
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
*/
let a = 4;
let b = 6;
let c = 2;
// Add
console.log(a + b);
console.log(a + 10);
console.log(2 + 10);
// Subtract
console.log(b - a);
console.log(a - b);
console.log(a - 3);
console.log(-5 - 3);
console.log(-5 - -3);
// Divide
console.log(b / c);
console.log(b / 3);
console.log(-2 / 5);
// Multiply
console.log(a * b);
console.log(a * 3);
console.log(2 * 3);
// powers
console.log(b ** a); //6**4
console.log(b ** 2); //6**4
console.log(5 ** 2); //6**4
// Modulus(remainders)
console.log(5 % 2);
const fun = function (n) {
  if (n % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};
fun(11);
