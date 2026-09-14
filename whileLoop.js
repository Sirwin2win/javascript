/*
initialization
while(condition){
    // loop body
    // increment/decrement
}
*/
const fruits = ["Pawpaw", "Apple", "Banana", "Cherry", "Orange"];
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
console.log(fruits.length - 1);
console.log("********************");
// looping from the back i.e decrement
let j = fruits.length - 1;
while (j >= 0) {
  console.log(fruits[j]);
  j--;
}
const name = "Godwin";
console.log(name[0]);
console.log(name[1]);
console.log(name[name.length - 1]);
let k = 0;
while (k < name.length) {
  console.log(name[k]);
  k++;
}
console.log("********************");
// looping from the back i.e decrement
let l = name.length - 1;
while (l >= 0) {
  console.log(name[l]);
  l--;
}
// Here we are going to loop into an empty container
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let emt = 0;
let m = 0;
while (m < num.length) {
  emt += num[m];
  m++;
}
console.log(emt);
const oruko = "Lagasa";
let emt2 = "";
let n = oruko.length - 1;
while (n >= 0) {
  emt2 += oruko[n];
  n--;
}
console.log(emt2);
