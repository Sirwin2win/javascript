/*
1. if statement
2. else statement
3. else if
4. ternary
5. switch
*/
// if statement
/*
if(condition){
    // code to run if the condition is true
}else{
    // code to run if the condition is false
    }


*/
const today = "Wednesday";
if (today == "Wednesday") {
  console.log("Your date is correct");
}
let isAdmin = true;
if (isAdmin) {
  console.log("Welcome Admin!");
}
if (false) {
  console.log("All correct!");
}
// else statement. THis is a fall back that happens when the if block is false
let email = "sirwin@gmail.com";
let password = "Password@2";
if (email == "sirwin@gmail.com" && password == "Password@2") {
  console.log("Welcome, Sirwin");
} else {
  console.log("Ivalid email/password");
}
// else if statement. This is used when you have more than one condition to test
let age = 100;
if (age < 13) {
  console.log("Adolescence");
} else if (age < 19) {
  console.log("Teen ager");
} else if (age < 66) {
  console.log("Civil servant");
} else {
  console.log("Retired");
}
// Greeting example
let hour = new Date().getHours();
// console.log(typeof hour);
if (hour < 12) {
  console.log("Good morning");
} else if (hour < 16) {
  console.log("Good afternoon");
} else if (hour < 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
// console.log(hour < 12);
// ternary statement
/*
condition to test? code to run if condition is true : code to run if condition is fasle

*/
let day = new Date().getDay(); // 0,1,2,3,4,5,6
console.log(day == 6);
let cond = day == 6 ? "Wednesday" : "Any other day";
console.log(cond);

// swicth statement
/*
switch(statement){
case1:
console.log("result")
break;
case2:
console.log("result")
break;
case3:
console.log("result")
break;
default:
    console.log("Fall back code")
}
*/
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Not applicable");
    break;
}
let month = new Date().getMonth();
console.log(month);
// FAQ
