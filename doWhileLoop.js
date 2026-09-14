/*
The do while loop looks exactly like the while loop. The only difference is that here, we do the body
of the loop first before the condition
initialization
do{
    // body
    increment/decrement
}while(condition)
*/
const name = "Ikenna";
// initialization
let i = 0;
do {
  //body
  console.log(name[i]);
  //increment
  i++;
} while (i < name.length); // condition
console.log("******************");
// Looping from the back and saving inside a container called emt
let emt = "";
let j = name.length - 1;
do {
  emt += name[j];
  //   console.log(name[j]);
  j--;
} while (j >= 0);
console.log(emt);
console.log(name[1]);
