/*
A loop is a block that runs so long as a condition is true.
Types of JavaScript loop
1. for loop
2. while loop
3. do while loop
4. for of loop
5. for in loop
                LOOP Syntax
for(initialization;condition;increment/decrement){
            loop body
    }
            i++
*/
const fruits = ["Apple", "Banana", "Cherry", "Orange"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log("******************************");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("******************************");
for (let k = fruits.length - 1; k >= 0; k--) {
  console.log(fruits[k]);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
let container = 0;
for (let i = 0; i < nums.length; i++) {
  container += nums[i];
}
console.log(container);
// Looping through strings
const name = "John Doe";
console.log(name.length);
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
// looping through a string from the back and collecting the answer in a variable
const today = "Monday";
let cont1 = "";
for (let i = today.length - 1; i >= 0; i--) {
  cont1 += today[i];
}
console.log(cont1);
// A function that sums any number of values
const summer = function (...a) {
  let cont2 = 0;
  for (let i = 0; i < a.length; i++) {
    cont2 += a[i];
  }
  return cont2;
};
console.log(summer(2, 3, 4, 5));
console.log(summer(2, 3, 4, 5, 10));
// a function that has loop and conditional// level;civic, racecar
const checker = function (info) {
  let const3 = "";
  for (let i = info.length - 1; i >= 0; i--) {
    const3 += info[i];
  }
  if (const3 === info) {
    return `${info} is a palindrome`;
  } else {
    return `${info} is not a palindrome`;
  }
};
console.log(checker("godwin"));
console.log(checker("level"));
console.log(checker("civic"));
console.log(checker("madam"));
console.log(checker("dad"));
