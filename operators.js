/* Operators are used to carry out operations on variables
1. Arithmetic Operators +;-;/;*;**;%
2. Assignment Operators =; -=; +=; *= ;/= ; **=; %=
3. Comparison Operators
4. Logical Operators
*/
let a = 3;
let b = 4;
let c = 5;
let e = 2;
console.log(a + b + c);
console.log(a + b - c); // bodmas bedmas pedmas
console.log(a * b);
console.log(a * b);
console.log(b / e);
console.log(b ** e);
console.log(5 ** e);
console.log(6 ** 2); // 6 x 6
console.log(5 % 2);
console.log(7 % 2);
console.log(1000 % 2);
let num = 23;
if (num % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}
let age = 20;
console.log(age + 2);
// Assignment Operators  =; -=; +=; *= ;/= ; **=; %=
let x = 2;
let y = 20;
let z = 6;
console.log(y);
console.log((y -= x)); // y = y-x(y=20-2)
console.log((z += 7)); // z = z + 7
console.log(z);
console.log((x *= 4)); // x = x*4
console.log((y /= 2)); // y = y/2
console.log((y **= 2)); // y = y**2
console.log((y %= 2)); // y = y%2
console.log(y);

// Comparison Operators ==;===;>;<;>=;<=;!=
// equal to (==)
// equal to and equal data type(===)
// != not equal to
let i = 3;
let j = 6;
let k = 4;
let l = "3";
console.log(i == j);
console.log(i === l);
console.log(j > k);
console.log(j < k);
console.log(k >= i);
console.log(j <= k);
console.log(i != j);
// console.log(typeof i);
// console.log(typeof l);
// Logical Operators ||; &&
// || logical OR: This is looking for a truthy value
// && logical AND : This is looking for a falsy value
console.log(i != j || j <= k);
console.log(i != j && j <= k);
let monday = true;
let tuesday = false;
console.log(monday && tuesday);
console.log(true || false || false);
console.log(true && true && false);
// questions and answers
let m = 6;
let n = 10;
let o = 2;
console.log(n != m);
console.log(m < o);
console.log(n != m || m < o); // true
console.log(m > o && n == m); // false
